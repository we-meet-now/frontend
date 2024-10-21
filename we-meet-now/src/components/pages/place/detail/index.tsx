import { useEffect, useState } from "react";
import MapHeader from "../../../common/MapHeader";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../../../../styles/DetailPage";
import SearchIcon from "../../../../assets/SearchIcon";

const DetailPage = () => {
  const tempFunc = () => {
    // 검색하면 다시 리스트 페이지로?? 생각해봐야함
    console.log("list page에 serach 함수 hook으로 만들 필요가 있음");
  };

  const navigate = useNavigate();
  const [map, setMap] = useState(null);

  const location = useLocation();
  const place = location.state?.place;

  useEffect(() => {
    if (window.kakao) {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      setMap(map);

      if (place) {
        const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
        const marker = new window.kakao.maps.Marker({
          position: placePosition,
        });
        marker.setMap(map);
        map.setCenter(placePosition);
      }
    }
  }, [place]);

  const search = (searchValue: string) => {
    navigate(`/place/list?search=${searchValue}`);
  };

  return (
    <>
      <MapHeader rightButtonType={"list"} onClickSearchButton={tempFunc} />
      <div id="map" className="w-full h-screen"></div>
      {place ? (
        <S.Container>
          {/* 카드 컴포넌트 만들기 */}
          <div className="card">
            <div className="title">
              <div>{place.place_name}</div>
              <div>{place.category_group_name}</div>
            </div>
            <div className="sub-information">
              <div>{place.address_name}</div>
              <div>{place.phone}</div>
            </div>
            <SearchIcon width="38" height="38" />
          </div>
        </S.Container>
      ) : (
        <p>선택된 장소 데이터가 없습니다.</p>
      )}
    </>
  );
};

export default DetailPage;
