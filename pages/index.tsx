import React, {useContext, useEffect} from 'react'
import Layout from '../components/template/Layout'
import {ChartLayout} from "../components/template/ChartLayout";
import {StoreContext} from "../store/storeProvider";
import {MODE, PHASE} from "../store/viewModel/lineChartVM";
import {dataSelector} from "../utils/data";

const Top: React.FC = () => {

  const {lineChartVM, lineChartDispatch: dispatch} = useContext(StoreContext)
  const {actions, data, phase, mode, windSwitch, pressureSwitch, temperatureSwitch} = lineChartVM
  const {setData, setPhase, setMode, setPressureSwitch, setTemperatureSwitch, setWindSwitch} = actions

  useEffect(() => {
    dispatch(setData(dataSelector(phase, mode)))
  }, [phase, mode])

  return <Layout>
    <ChartLayout
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

export default Top
