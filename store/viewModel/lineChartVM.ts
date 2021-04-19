import {Data} from "../../data/data";

export type PHASE = 'CLIMB' | 'CRUISE'
export type MODE = 'FL' | 'FUEL_BURN' | 'IAS' | 'MACH'

export class LineChartVM {
  phase: PHASE = 'CLIMB'
  mode: MODE = 'FL'
  data: Data = []
  windSwitch: boolean = false
  temperatureSwitch: boolean = false
  pressureSwitch: boolean = false

  actions = {
    setPhase: (value: PHASE): this => {
      this.phase = value

      return this
    },
    setMode: (value: MODE): this => {
      this.mode = value

      return this
    },
    setData: (value: Data): this => {
      this.data = value

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
