import styled from "styled-components";
import tw from "twin.macro";

export const HeaderButton = styled.button`
  ${tw`bg-white border border-solid border-[#A4A4A4] p-2 w-12 h-12 flex justify-center items-center`}

  > div.icon-container {
    ${tw`flex flex-col items-center justify-center`}
    > span {
      ${tw`text-xs text-[#7997EC]`}
    }
  }
`;

export const HeaderInput = styled.input`
  ${tw`bg-white border border-solid border-[#A4A4A4] rounded-[20px] p-2 h-12 flex-grow`}
`;
