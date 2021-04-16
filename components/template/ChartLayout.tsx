import React from 'react'
import styled from "styled-components";
import {Props as SettingsPanelProps, SettingsPanel} from "../organisms/SettingsPanel";
import {InfoPanel} from "../organisms/InfoPanel";
import {defaultTheme} from "../utils";
import {LineChart} from "../organisms/chart/LineChart";
import {Data} from "../../utils/data";

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

type Props = SettingsPanelProps & {
  data: Data
}

export const ChartLayout: React.FC<Props> = ({data, phase, onChangeMode, mode, onChangePhase, wind, temperature, pressure}) => {
  return <Wrapper>
    <ChartWrapper>
      <LineChart data={data}/>
    </ChartWrapper>
    <SettingsWrapper>
      <SettingsPanel
        phase={phase}
        mode={mode}
        onChangeMode={onChangeMode}
        onChangePhase={onChangePhase}
        wind={{...wind}}
        temperature={{...temperature}}
        pressure={{...pressure}}
      />
    </SettingsWrapper>
    <InfoWrapper>
      <InfoPanel/>
    </InfoWrapper>
  </Wrapper>
}