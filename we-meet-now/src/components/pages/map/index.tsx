import React, { useEffect, useState } from "react";

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

  return <div id="map" className="w-[500px] h-[400px]"></div>;
};

export default MapPage;
