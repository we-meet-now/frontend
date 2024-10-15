import { useEffect, useState } from "react";
import MapHeader from "../../../common/MapHeader";
import { useNavigate } from "react-router-dom";
import * as S from "../../../../styles/DetailPage";

const DetailPage = () => {
  const tempFunc = () => {
    console.log("list page에 serach 함수 hook으로 만들 필요가 있음");
  };

  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (window.kakao) {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      setMap(map);
    }
  }, []);

  const search = (searchValue: string) => {
    navigate(`/place/list?search=${searchValue}`);
  };

  return (
    <>
      <MapHeader rightButtonType={"list"} onClickSearchButton={tempFunc} />
      <div id="map" className="w-full h-screen"></div>
      <S.Container>
        <div className="card">
          <div className="title">
            <div>BBQ 판교 테크노벨리점</div>
            <div>치킨</div>
          </div>
          <div className="sub-information">
            <div>경기 성남시 분당구 판교역로 231 S동 1층 121호</div>
            <div>010-1234-1234</div>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default DetailPage;
