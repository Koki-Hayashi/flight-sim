import React from 'react'
import styled from "styled-components";
import {Toggle} from "../atom/Toggle";
import {IndicatorText} from "../atom/StyledTexts";

const Wrapper = styled.div`

`

type Props = {
  title: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean
}

export const ToggleWithTitle: React.FC<Props> = ({title, onChange, checked}) => {
  return <Wrapper>
    <IndicatorText>
      {title}
    </IndicatorText>
    <Toggle onChange={onChange} checked={checked}/>.
  </Wrapper>
}