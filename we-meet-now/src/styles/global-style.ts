import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export const GlobalStyle = createGlobalStyle`
  body{
    ${tw`h-screen max-w-[390px] mx-auto border-2 border-rose-600`}
  }
`
