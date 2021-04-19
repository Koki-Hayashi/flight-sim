import React from 'react'
import styled from "styled-components";
import {BoldText} from "../atom/StyledTexts";
import {FuelSave} from "../../data/dataSet";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


const LayerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
`

const DescText = styled(BoldText)`
  margin-right: 15px;
`

export type Prop = {
  fuelSave: FuelSave
}

export const InfoPanel: React.FC<Prop> = ({fuelSave}) => {
  const {weight, usd} = fuelSave

  return <Wrapper>
    <LayerWrapper>
      <DescText>Fuel Saving: {weight}kg (${usd})</DescText>
      <DescText>FMS Settings: IAS 243kt, 10k ft, Max M = 0.78</DescText>
    </LayerWrapper>
    {/*<LayerWrapper>*/}
    {/*<DescText>Airclaft model: B789</DescText>*/}
    {/*  <DescText>Initial cruise altitude: FL320</DescText>*/}
    {/*  <DescText>Time delay to reach original TOC: 0 min</DescText>*/}
    {/*  <DescText>Time difference to reach cruise altitude: -3 min</DescText>*/}
    {/*</LayerWrapper>*/}
  </Wrapper>
}