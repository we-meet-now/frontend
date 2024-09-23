import React, { useState } from "react";
import SearchIcon from "../../assets/SearchIcon";
import ListIcon from "../../assets/ListIcon";
import MapIcon from "../../assets/MapIcon";
import * as S from "../../styles/common/MapHeader";

interface Props {
  onClickSearchButton: (searchValue: string) => void;
  rightButton: { type: "list" | "map"; onClick: () => void };
}

const MapHeader = ({ rightButton, onClickSearchButton }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <section className="z-10 fixed top-0 left-0 flex w-full p-3 gap-2 items-center">
      <S.HeaderButton onClick={rightButton.onClick}>
        {rightButton.type === "list" ? (
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
