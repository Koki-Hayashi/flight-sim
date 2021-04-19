import styled from "styled-components";
import {Typography} from "@material-ui/core";

// type Props = {
//   fontWeight: number;
//   size: number;
// }

const TextBase = styled(Typography)`
    text-transform: none;
`

export const LargeText = styled(TextBase)`
  font-size: 24px;
`

export const BoldText = styled(TextBase)`
  font-size: 24px;
  font-weight: 600;
`

export const IndicatorText = styled(TextBase)`
  font-size: 16px; 
`

export const NanoText = styled(TextBase)`
  font-size: 14px; 
`