import styled from "styled-components";
import tw from "twin.macro";

export const PlaceList = styled.ul`
  ${tw`w-full p-2 gap-2 mt-20 overflow-auto`}
  height: calc(100dvh - 5rem);

  > li {
    ${tw`flex flex-col mb-2`}

    div.title {
      ${tw`flex items-center gap-2`}
      > div:nth-child(2) {
        ${tw`text-[10px] text-[#A4A4A4]`}
      }
    }
    div.sub-information {
      ${tw`flex flex-col text-[10px]`}
    }
  }
`;
