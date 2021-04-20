import React from 'react'
import styled from "styled-components";
import Clock from 'react-live-clock';

import {
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import {getDataSet, Phase} from "../../../data/dataSet";
import {FlightData} from "../../../data/flights";
import {MODE, X_AXIS_MODE} from "../../../store/viewModel/lineChartVM";
import {defaultTheme} from "../../utils";

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
  phase: Phase,
  mode: MODE,
  xAxis: X_AXIS_MODE
}

export const LineChart: React.FC<Props> = ({flight, phase, mode, xAxis}) => {

  const dataSet = getDataSet(phase.type, mode)
  const isTime = xAxis === "TIME"
  const xAxisLabel = isTime ? "Time Elapsed (s)" : "Trajectory (km)"
  const data = isTime ? dataSet.time : dataSet.trajectory
  
  return <Wrapper>
    <HeadlineWrapper>
      <FlightIdWrapper>FN: {flight.number}</FlightIdWrapper>
      <div>Current Time: <Clock format={'yyyy/MM/DD HH:mm:ss'} ticking={true}/></div>
      <FlightIdWrapper>Destination: {flight.destination}</FlightIdWrapper>
    </HeadlineWrapper>
    <ChartWrapper>
      <ResponsiveContainer width={'99%'} height={600}>
        <ComposedChart
          data={data}
        >
          <XAxis
            dataKey="x"
            tickSize={2}
            tickFormatter={(value) => String(Math.round(value))}
            label={{value: xAxisLabel, offset: -7, position: "bottom"}}
          />
          <YAxis
            label={{value: dataSet.yLabel, angle: -90, offset: 5, position: 'insideLeft'}}
          />
          <Legend verticalAlign="top"/>
          <Tooltip/>
          <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
          <Line type="monotone" dataKey="original" stroke="#228B22" dot={false}/>
          <Line type="monotone" dataKey="optimal" stroke={defaultTheme.main} dot={false}/>
          {phase.type === "CRUISE" && mode === "FL" &&
          <Line type="monotone" dataKey="upperLimit" stroke="red" name="EEF upper limit" dot={false}/>
          }
          {phase.type === "CRUISE" && mode === "FL" &&
          <Line type="monotone" dataKey="lowerLimit" stroke="blue" name="EEF lower limit" dot={false}/>
          }
          {phase.type === "CRUISE" && mode === "FL" && (isTime ?
              <ReferenceLine
                segment={[{x: 3066, y: 340}, {x: 3066, y: 600}]}  // TODO Have to define x in a programmatical way
                stroke={defaultTheme.darkGray}
                label="①"/> :
              <ReferenceLine segment={[{x: 497, y: 340}, {x: 497, y: 600}]} stroke={defaultTheme.darkGray} label="①"/>
          )}
          {phase.type === "CRUISE" && mode === "FL" && (isTime ?
              <ReferenceLine segment={[{x: 3974, y: 340}, {x: 3974, y: 600}]} stroke={defaultTheme.darkGray}
                             label="②"/> :
              <ReferenceLine segment={[{x: 721, y: 340}, {x: 721, y: 600}]} stroke={defaultTheme.darkGray} label="②"/>
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </ChartWrapper>
  </Wrapper>
}