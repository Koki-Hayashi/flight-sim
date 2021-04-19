import React, {useContext, useEffect} from 'react'
import Layout from '../../components/template/Layout'
import {ChartLayout} from "../../components/template/ChartLayout";
import {StoreContext} from "../../store/storeProvider";
import {MODE, PHASE} from "../../store/viewModel/lineChartVM";
import {dataSelector} from "../../data/data";
import {useRouter} from "next/router";
import {LoadingView} from "../../components/atom/LoadingView";
import {getOrFirstOne} from "../../utils/queryUtil";

const FlightSimulator: React.FC = () => {

  const {lineChartVM, lineChartDispatch: dispatch} = useContext(StoreContext)
  const {actions, data, phase, mode, windSwitch, pressureSwitch, temperatureSwitch} = lineChartVM
  const {setData, setPhase, setMode, setPressureSwitch, setTemperatureSwitch, setWindSwitch} = actions

  useEffect(() => {
    dispatch(setData(dataSelector(phase, mode)))
  }, [phase, mode])

  const router = useRouter()
  const flightNumber = getOrFirstOne(router.query, 'flight_no')
  if (!flightNumber) return <LoadingView/>

  return <Layout>
    <ChartLayout
      flightNumber={flightNumber}
      data={data}
      phase={phase}
      onChangePhase={(e) => {
        dispatch(setPhase(e.target.value as PHASE))
      }}
      mode={mode}
      onChangeMode={(e) => {
        dispatch(setMode(e.target.value as MODE))
      }}
      wind={{
        onChange: (e) => {
          dispatch(setWindSwitch(e.target.checked))
        }, checked: windSwitch
      }}
      temperature={{
        onChange: (e) => {
          dispatch(setTemperatureSwitch(e.target.checked))
        }, checked: temperatureSwitch
      }}
      pressure={{
        onChange: (e) => {
          dispatch(setPressureSwitch(e.target.checked))
        }, checked: pressureSwitch
      }}
    />
  </Layout>
}

export default FlightSimulator
