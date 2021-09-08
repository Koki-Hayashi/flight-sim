import React, {useContext} from 'react'
import Layout from '../../components/template/Layout'
import {ChartLayout} from "../../components/template/ChartLayout";
import {StoreContext} from "../../store/storeProvider";
import {getPhase, PHASE_TYPE} from "../../data/dataSet";
import {useRouter} from "next/router";
import {LoadingView} from "../../components/atom/LoadingView";
import {getOrFirstOne} from "../../utils/queryUtil";
import {getFlight} from "../../data/flights";

const FlightSimulator: React.FC = () => {

  const {lineChartVM, lineChartDispatch: dispatch} = useContext(StoreContext)
  const {actions, phase, mode, windSwitch, pressureSwitch, temperatureSwitch, xAxis} = lineChartVM
  const {update} = actions

  const router = useRouter()
  const flightNumber = getOrFirstOne(router.query, 'flight_no')
  if (!flightNumber) return <LoadingView/>

  const flight = getFlight(flightNumber)

  return <Layout>
    <ChartLayout
      flight={flight}
      phase={phase}
      onChangePhase={(e: any) => {
        const phaseType = e.target.value as PHASE_TYPE
        dispatch(update({
          phase: getPhase(phaseType)
        }))
      }}
      mode={mode}
      onChangeMode={(e: any) => {
        dispatch(update({
          pressureSwitch: false,
          mode: e.target.value
        }))
      }}
      xAxis={xAxis}
      onChangeXAxis={(e: any) => {
        dispatch(update({
          xAxis: e.target.value
        }))
      }}
      wind={{
        onChange: (e: any) => {
          dispatch(update({
            windSwitch: e.target.checked
          }))
        }, checked: windSwitch
      }}
      temperature={{
        onChange: (e: any) => {
          dispatch(update({
            temperatureSwitch: e.target.checked
          }))
        }, checked: temperatureSwitch
      }}
      pressure={{
        onChange: (e: any) => {
          dispatch(update({
            pressureSwitch: e.target.checked
          }))
        }, checked: pressureSwitch
      }}
        />
        </Layout>
        }

        export default FlightSimulator
