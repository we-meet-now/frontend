import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapPage from "./components/pages/map";
import PlaceList from "./components/pages/place/list";
import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/place/list" element={<PlaceList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
