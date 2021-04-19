import {MODE} from "../store/viewModel/lineChartVM";
import {climbFl} from "./climb/fl";
import {climbFuelBurn} from "./climb/fuelBurn";
import {climbMach} from "./climb/mach";
import {climbIAS} from "./climb/ias";
import {cruiseFl} from "./cruise/fl";

type Datum = {
  name?: string
  original: number,
  optimal: number
}

export type DataSet = {
  yLabel: string,
  data: Array<Datum>
}

export type PHASE_TYPE = 'CLIMB' | 'CRUISE'

export const getPhase = (phaseType: PHASE_TYPE): Phase => {
  switch (phaseType) {
    case "CRUISE":
      return cruise
    case "CLIMB":
      return climb
  }
}

export const getDataSet = (phase: PHASE_TYPE, mode: MODE): DataSet => {
  const p = getPhase(phase)

  switch (mode) {
    case "FL":
      return p.fl
    case "FUEL_BURN":
      return p.fuelBurn
    case "IAS":
      return p.ias
    case "MACH":
      return p.mach
  }
}

export type FuelSave = {
  weight: number
  usd: number
}


export type Phase = {
  type: PHASE_TYPE
  fuelSave: FuelSave
  fl: DataSet
  fuelBurn: DataSet
  ias: DataSet,
  mach: DataSet
}

const cruise: Phase = {
  type: "CRUISE",
  fuelSave: {
    weight: -815,
    usd: -571
  },
  fl: cruiseFl,
  fuelBurn: {yLabel: "", data: []},
  ias: {yLabel: "", data: []},
  mach: {yLabel: "", data: []},
}

const climb: Phase = {
  type: "CLIMB",
  fuelSave: {
    weight: -215,
    usd: -150
  },
  fl: climbFl,
  fuelBurn: climbFuelBurn,
  ias: climbIAS,
  mach: climbMach
}
