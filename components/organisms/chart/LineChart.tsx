import React from 'react'
import styled from "styled-components";
import Clock from 'react-live-clock';

import {CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {DataSet} from "../../../data/dataSet";
import {FlightData} from "../../../data/flights";

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

const ChartWrapper = styled.div`
`

export type Props = {
  flight: FlightData,
  dataSet: DataSet,
}

export const LineChart: React.FC<Props> = ({flight, dataSet}) => {
  return <Wrapper>
    <HeadlineWrapper>
      <FlightIdWrapper>FN: {flight.number}</FlightIdWrapper>
      <div>Current Time: <Clock format={'yyyy/MM/DD HH:mm:ss'} ticking={true}/></div>
      <FlightIdWrapper>Destination: {flight.destination}</FlightIdWrapper>
    </HeadlineWrapper>
    <ChartWrapper>
      <ResponsiveContainer width={'99%'} height={550}>
        <ComposedChart
          width={500}
          height={350}
          data={dataSet.data}>
          <XAxis dataKey="name"/>
          <YAxis
            label={{value: dataSet.yLabel, angle: -90, offset: 5, position: 'insideLeft'}}
          />
          <Legend/>
          <Tooltip/>
          <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
          <Line type="monotone" dataKey="original" stroke="#8884d8"/>
          <Line type="monotone" dataKey="optimal" stroke="#82ca9d"/>
        </ComposedChart>
      </ResponsiveContainer>
    </ChartWrapper>
  </Wrapper>
}