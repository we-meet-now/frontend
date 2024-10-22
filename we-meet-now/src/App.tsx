import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapPage from "./components/pages/map";
import PlaceList from "./components/pages/place/list";
import DetailPage from "./components/pages/place/detail";
import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/place/list" element={<PlaceList />} />
          <Route path="/place/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
