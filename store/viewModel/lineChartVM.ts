import {getPhase, Phase} from "../../data/dataSet";

export type MODE = 'FL' | 'FUEL_BURN' | 'IAS' | 'MACH'
export type X_AXIS_MODE = 'TIME' | 'TRAJECTORY'

export class LineChartVM {
  phase: Phase = getPhase("CLIMB")
  mode: MODE = 'FL'
  xAxis: X_AXIS_MODE = 'TIME'
  windSwitch: boolean = false
  temperatureSwitch: boolean = false
  pressureSwitch: boolean = false

  actions = {
    setPhase: (value: Phase): this => {
      this.phase = value

      return this
    },
    setMode: (value: MODE): this => {
      this.mode = value

      return this
    },
    setXAxis: (value: X_AXIS_MODE): this => {
      this.xAxis = value

      return this
    },
    setWindSwitch: (value: boolean): this => {
      this.windSwitch = value

      return this
    },
    setTemperatureSwitch: (value: boolean): this => {
      this.temperatureSwitch = value

      return this
    },
    setPressureSwitch: (value: boolean): this => {
      this.pressureSwitch = value;

      return this
    },
  }

  sideEffects = {}
}

export const lineChartVMReducer = (_: LineChartVM, newVM: LineChartVM) => {
  return {...newVM}
}
