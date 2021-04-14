import React from 'react';
import styled from "styled-components";
import {NanoText} from "../atom/StyledTexts";
import {defaultTheme} from "../utils";

const Wrapper = styled.div`
  height: 200px;
  border-top: 1px ${defaultTheme.darkGray} solid
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  
`

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <NanoText>
          Copyright © xyz Inc.
        </NanoText>
      </TextWrapper>
    </Wrapper>
  );
}