import React from 'react'
import styled from "styled-components";
import Switch from '@material-ui/core/Switch';

const Wrapper = styled.div`

`

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean
}

export const Toggle: React.FC<Props> = ({checked, onChange}) => {
  return <Wrapper>
    <Switch
      checked={checked}
      onChange={onChange}
      color="primary"
      inputProps={{'aria-label': 'primary checkbox'}}
    />
  </Wrapper>

}