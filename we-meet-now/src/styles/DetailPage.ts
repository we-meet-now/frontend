import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`absolute bottom-0 z-20 h-[200px] w-full bg-white rounded-t-[10%]`}

  .card {
    ${tw`mt-7`}
    .title {
      ${tw`flex items-center justify-center gap-5`}

      div:nth-child(1) {
        ${tw`text-[22px]`}
      }
      div:last-child(2) {
        ${tw`text-[10px]`}
      }
    }
    .sub-information {
      ${tw`flex flex-col justify-center items-center text-[13px] mt-4`}
    }
  }
`;
