import React from 'react'
import styled from "styled-components";
import {Toggle} from "../atom/Toggle";
import {FormControl, FormControlLabel} from "@material-ui/core";

const Wrapper = styled.div`

`

type Props = {
  title: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean
}

export const ToggleWithTitle: React.FC<Props> = ({title, onChange, checked}) => {
  return <Wrapper>
    <FormControl component="fieldset">
      <FormControlLabel
        value={title}
        control={<Toggle onChange={onChange} checked={checked}/>}
        label={title}
        labelPlacement="end"
      />
    </FormControl>
  </Wrapper>
}