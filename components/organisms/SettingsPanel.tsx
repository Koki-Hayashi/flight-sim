import React from 'react'
import styled from "styled-components";
import {ToggleWithTitle} from "../molecules/ToggleWithTitle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


type ToggleHandler = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

type Props = {
  wind: ToggleHandler,
  temperature: ToggleHandler,
  pressure: ToggleHandler,
}

export const SettingsPanel: React.FC<Props> = ({wind, temperature, pressure}) => {
  return <Wrapper>
    <ToggleWithTitle title={"Wind"} {...wind} />
    <ToggleWithTitle title={"Temperature"} {...temperature}/>
    <ToggleWithTitle title={"Pressure"} {...pressure}/>
  </Wrapper>
}