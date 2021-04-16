import React from 'react'
import styled from "styled-components";
import Clock from 'react-live-clock';

import {CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {Data} from "../../../utils/data";

const Wrapper = styled.div`
  
`

const HeadlineWrapper = styled.div`
   margin: 30px 0;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
`

const FlightIdWrapper = styled.div`
  margin-right: 20px;
`

type Props = {
  data: Data
}

export const LineChart: React.FC<Props> = ({data}) => {
  return <Wrapper>
    <HeadlineWrapper>
      <FlightIdWrapper>FN: NF200</FlightIdWrapper>
      <div>Current Time: <Clock format={'yyyy/MM/DD HH:mm:ss'} ticking={true}/></div>
      <FlightIdWrapper>Destination: HND(RJTT) - OKA(RDAH) </FlightIdWrapper>
    </HeadlineWrapper>
    <ResponsiveContainer width={'99%'} height={550}>
      <ComposedChart
        width={500}
        height={300}
        data={data}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Legend/>
        <Tooltip/>
        <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
        <Line type="monotone" dataKey="original" stroke="#8884d8"/>
        <Line type="monotone" dataKey="optimal" stroke="#82ca9d"/>
      </ComposedChart>
    </ResponsiveContainer>
  </Wrapper>
}