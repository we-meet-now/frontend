import React, { useEffect, useState } from "react";
import MapHeader from "../../common/MapHeader";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
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
    // 검색 로직
  };

  const changeView = () => {
    // 페이지 전환 로직
  };

  return (
    <>
      <MapHeader
        rightButton={{
          type: "list",
          onClick: () => changeView(),
        }}
        onClickSearchButton={search}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
};

export default MapPage;
