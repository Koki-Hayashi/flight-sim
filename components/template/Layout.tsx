import React, {ReactNode} from 'react'
import Header from "../organisms/Header";
import {Footer} from "../organisms/Footer";
import styled from "styled-components";


type Props = {
  children?: ReactNode
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr 24px;
`
const HeaderWrapper = styled.div`
  grid-row: 1;
`

const BodyWrapper = styled.div`
  grid-row: 2;
`

const FooterWrapper = styled.div`
  grid-row: 3;
`

const Layout = ({children}: Props) => (
  <Wrapper>
    <HeaderWrapper>
      <Header/>
    </HeaderWrapper>
    <BodyWrapper>
      {children}
    </BodyWrapper>
    <FooterWrapper>
      <Footer/>
    </FooterWrapper>
  </Wrapper>
)

export default Layout
