import React from 'react'
import styled from "styled-components";
import {Card} from "@material-ui/core";
import {defaultTheme} from "../../utils";
import {LargeText} from "../../atom/StyledTexts";
import Link from "next/link";

const FlightNumber = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 240px;
  padding: 24px;
  margin: 24px;
  
  background-color: ${defaultTheme.background};
`

type Props = {
  flightNumber: string
}

export const FlightNumberPanel: React.FC<Props> = ({flightNumber}) => {
  return <FlightNumber>
    <LargeText>
      <Link href={"/sim/" + flightNumber}>
        {flightNumber}
      </Link>
    </LargeText>
  </FlightNumber>
}