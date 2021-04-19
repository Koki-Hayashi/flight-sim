import React from 'react'
import styled from "styled-components";
import {SettingsPanel} from "../organisms/SettingsPanel";
import {InfoPanel} from "../organisms/InfoPanel";
import {defaultTheme} from "../utils";
import {LineChart} from "../organisms/chart/LineChart";
import {getDataSet, Phase} from "../../data/dataSet";
import {MODE} from "../../store/viewModel/lineChartVM";
import {FlightData} from "../../data/flights";

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

type ToggleHandler = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

type Props = {
  phase: Phase,
  onChangePhase: (e: React.ChangeEvent<{ name?: string; value: unknown }>) => void,
  mode: MODE,
  onChangeMode: (e: React.ChangeEvent<{ name?: string; value: unknown }>) => void
  wind: ToggleHandler,
  temperature: ToggleHandler,
  pressure: ToggleHandler,
  flight: FlightData,
}

export const ChartLayout: React.FC<Props> = ({flight, phase, onChangeMode, mode, onChangePhase, wind, temperature, pressure}) => {
  return <Wrapper>
    <ChartWrapper>
      <LineChart
        flight={flight}
        dataSet={getDataSet(phase.type, mode)}
      />
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
      <InfoPanel fuelSave={phase.fuelSave}/>
    </InfoWrapper>
  </Wrapper>
}