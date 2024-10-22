import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MapHeader from "../../common/MapHeader";
import MapFooter from "../../common/MapFooter";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
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
      <MapHeader rightButtonType={"list"} onClickSearchButton={search} />
      <div id="map" className="w-full h-screen"></div>
      <MapFooter />
    </>
  );
};

export default MapPage;
