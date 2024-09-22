import React, { useState } from "react";
import SearchIcon from "../../assets/SearchIcon";
import ListIcon from "../../assets/ListIcon";
import MapIcon from "../../assets/MapIcon";

interface Props {
  onClickSearchButton: (searchValue: string) => void;
  rightButton: { type: "list" | "map"; onClick: () => void };
}

const MapHeader = ({ rightButton, onClickSearchButton }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <section className="flex w-full p-3 bg-pink-50 gap-2 items-center">
      <button
        className="bg-white border border-solid border-[#A4A4A4] p-2 w-12 h-12 flex justify-center items-center"
        onClick={rightButton.onClick}
      >
        {rightButton.type === "list" ? (
          <div className="flex flex-col items-center justify-center">
            <ListIcon width="46" />
            <span className="text-xs text-[#7997EC]">목록</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <MapIcon width="36" height="26" />
            <span className="text-xs text-[#7997EC]">지도</span>
          </div>
        )}
      </button>
      <input
        className="bg-white border border-solid border-[#A4A4A4] rounded-[20px] p-2 h-12 flex-grow"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button
        className="bg-white border border-solid border-[#A4A4A4] p-2 w-12 h-12 flex justify-center items-center"
        onClick={() => onClickSearchButton(searchValue)}
      >
        <SearchIcon width="24" height="24" />
      </button>
    </section>
  );
};

export default MapHeader;
