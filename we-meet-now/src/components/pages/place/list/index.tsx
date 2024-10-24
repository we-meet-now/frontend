import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Place } from "../../../../types/kakao";
import MapHeader from "../../../common/MapHeader";
import * as S from "../../../../styles/PlaceList";

declare global {
  interface Window {
    kakao: any;
  }
}

const PlaceList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  const [places, setPlaces] = useState<Place[]>([]);
  const kakaoPlaces = new window.kakao.maps.services.Places();

  const search = (searchValue: string) => {
    navigate(`/place/list?search=${searchValue}`);
  };

  const searchPlaces = () => {
    if (searchValue && !searchValue.replace(/^\s+|\s+$/g, "")) {
      alert("키워드를 입력해주세요!");
      return false;
    }
    kakaoPlaces.keywordSearch(
      searchValue,
      (data: any, status: any, pagination: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setPlaces(data);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          alert("검색 결과가 존재하지 않습니다.");
          return;
        } else if (status === window.kakao.maps.services.Status.ERROR) {
          alert("검색 결과 중 오류가 발생했습니다.");
          return;
        }
      }
    );
  };

  useEffect(() => {
    if (searchValue) {
      searchPlaces();
    } else {
      setPlaces([]);
    }
  }, [searchValue]);

  const handlePlace = (place: Place) => {
    //props 로 데이터를 넘기지만 선택한 장소에 대한 상태관리는 필요할듯...
    navigate(`/place/detail/${place.id}`, { state: { place } });
  };

  return (
    <>
      <MapHeader rightButtonType={"map"} onClickSearchButton={search} />
      <S.PlaceList>
        {searchValue === null || searchValue === "" ? (
          <div className="empty-container">검색어를 입력해주세요.</div>
        ) : (
          places.map((place) => (
            <li key={place.id} onClick={() => handlePlace(place)}>
              <div className="title">
                <div>{place.place_name}</div>
                <div>{place.category_group_name}</div>
              </div>
              <div className="sub-information">
                <div>{place.address_name}</div>
                <div>{place.phone}</div>
              </div>
            </li>
          ))
        )}
      </S.PlaceList>
    </>
  );
};

export default PlaceList;
