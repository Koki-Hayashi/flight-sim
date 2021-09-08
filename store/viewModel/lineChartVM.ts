import {getPhase, Phase} from "../../data/dataSet";
import {ViewModelType} from "../types/type";

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
    update: (value: ViewModelType<LineChartVM>): LineChartVM => {
      return Object.assign(this, value)
    },
  }

  sideEffects = {}
}

export const lineChartVMReducer = (_: LineChartVM, newVM: LineChartVM) => {
  return {...newVM}
}
