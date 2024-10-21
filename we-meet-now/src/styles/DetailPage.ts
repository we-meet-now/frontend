import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`absolute bottom-0 z-20 h-[200px] w-full bg-white rounded-t-[10%]`}

  .card {
    ${tw`mx-auto mt-7 w-80`}
    .title {
      ${tw`flex items-center justify-start gap-2`}

      div:nth-child(1) {
        ${tw`text-[22px]`}
      }
      div:nth-child(2) {
        ${tw`text-[13px]`}
      }
    }
    .sub-information {
      ${tw`flex flex-col justify-start items-start text-[13px] mt-2 gap-1`}
    }
    svg {
      ${tw`mt-5`}
    }
  }
`;
