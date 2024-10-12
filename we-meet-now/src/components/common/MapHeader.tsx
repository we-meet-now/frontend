import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/SearchIcon";
import ListIcon from "../../assets/ListIcon";
import MapIcon from "../../assets/MapIcon";
import * as S from "../../styles/common/MapHeader";

interface Props {
  onClickSearchButton: (searchValue: string) => void;
  rightButtonType: "list" | "map";
}

const MapHeader = ({ rightButtonType, onClickSearchButton }: Props) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <section className="fixed top-0 left-0 z-10 flex items-center w-full gap-2 p-3">
      <S.HeaderButton
        onClick={() => {
          navigate(rightButtonType === "map" ? `/` : `/place/list`);
        }}
      >
        {rightButtonType === "list" ? (
          <div className="icon-container">
            <ListIcon width="36" />
            <span>목록</span>
          </div>
        ) : (
          <div className="icon-container">
            <MapIcon width="36" height="26" />
            <span>지도</span>
          </div>
        )}
      </S.HeaderButton>
      <S.HeaderInput
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <S.HeaderButton onClick={() => onClickSearchButton(searchValue)}>
        <SearchIcon width="24" height="24" />
      </S.HeaderButton>
    </section>
  );
};

export default MapHeader;
