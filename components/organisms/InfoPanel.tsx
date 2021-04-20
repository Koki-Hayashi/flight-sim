import React from 'react'
import styled from "styled-components";
import {BoldText, LargeText} from "../atom/StyledTexts";
import {FuelSave} from "../../data/dataSet";

import Countdown from 'react-countdown';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 50px;
`


const LayerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
`

const DescText = styled(BoldText)`
  margin-right: 15px;
`

const FlightPlanWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 700px;
`


export type Prop = {
  fuelSave: FuelSave,
  isCruise: boolean
}

const renderer = ({formatted}: any) => {
  const {hours, minutes, seconds} = formatted
  return <>{hours}:{minutes}:{seconds}</>;
};

export const InfoPanel: React.FC<Prop> = ({fuelSave, isCruise}) => {
  const {weight, usd} = fuelSave

  const initialOffsetMilliSec1 = 332000
  const initialOffsetMilliSec2 = 4215000

  return <Wrapper>
    <LayerWrapper>
      <DescText>Fuel Saving: {weight}kg (${usd})</DescText>
      <DescText>FMS Settings: IAS 243kt, 10k ft, Max M = 0.78</DescText>
    </LayerWrapper>
    {
      isCruise &&
      <>
          <FlightPlanWrapper>
              <LargeText>①FL300 - FL320</LargeText>
              <LargeText>M0.78</LargeText>
              <LargeText>in <Countdown date={Date.now() + initialOffsetMilliSec1} renderer={renderer}/> min</LargeText>
              <LargeText>300ft/min</LargeText>
          </FlightPlanWrapper>
          <FlightPlanWrapper>
              <LargeText>②FL320 - FL340</LargeText>
              <LargeText>M0.80</LargeText>
              <LargeText>in <Countdown date={Date.now() + initialOffsetMilliSec2} renderer={renderer}/> min</LargeText>
              <LargeText>200ft/min</LargeText>
          </FlightPlanWrapper>
      </>
    }


  </Wrapper>
}