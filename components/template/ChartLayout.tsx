import React from 'react'
import styled from "styled-components";
import {LineChart} from "../organisms/chart/LineChart";
import {SettingsPanel} from "../organisms/SettingsPanel";
import {InfoPanel} from "../organisms/InfoPanel";
import {defaultTheme} from "../utils";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 1fr 15%;
  
  height: 100%;
  box-sizing: border-box;

  padding: 8px
`

const ChartWrapper = styled.div`
  grid-row: 1;
  grid-column: 1;
  border: ${defaultTheme.darkGray} 1px solid;
`

const SettingsWrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
  border: ${defaultTheme.darkGray} 1px solid;
  border-left: none
`

const InfoWrapper = styled.div`
  border: ${defaultTheme.darkGray} 1px solid;
  border-top: none;
  grid-row: 2;
  grid-column: 1 / 3;
`

export const ChartLayout: React.FC = () => {
  return <Wrapper>
    <ChartWrapper>
      <LineChart/>
    </ChartWrapper>
    <SettingsWrapper>
      <SettingsPanel
        wind={{onChange: () => console.log("wind"), checked: true}}
        temperature={{onChange: () => console.log("temperature"), checked: true}}
        pressure={{onChange: () => console.log("pressure"), checked: true}}
      />
    </SettingsWrapper>
    <InfoWrapper>
      <InfoPanel/>
    </InfoWrapper>
  </Wrapper>
}