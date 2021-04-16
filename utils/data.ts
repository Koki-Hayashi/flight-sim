import {MODE, PHASE} from "../store/viewModel/lineChartVM";

type Datum = {
  name: string
  original: number,
  optimal: number
}

export type Data = Array<Datum>

export const dataSelector = (phase: PHASE, mode: MODE) => {
  if (phase === 'CRUISE') {
    return cruise
  }

  switch (mode) {
    case "FL":
      return fl
    case "FUEL_BURN":
      return fuelBurn
    case "IAS":
      return ias
    case "MACH":
      return mach
  }
}

const cruise: Data = [
  {
    name: 'WP1',
    original: 4000,
    optimal: 2400,
  },
  {
    name: 'WP2',
    original: 300,
    optimal: 148,
  },
]

const fl: Data = [
  {
    name: 'WP1',
    original: 3230,
    optimal: 2440,
  },
  {
    name: 'WP2',
    original: 332,
    optimal: 1444,
  },
]

const fuelBurn: Data = [
  {
    name: 'WP1',
    original: 2440,
    optimal: 22500,
  },
  {
    name: 'WP2',
    original: 20,
    optimal: 200,
  },
]

const ias: Data = [
  {
    name: 'WP1',
    original: 2440,
    optimal: 22500,
  },
  {
    name: 'WP2',
    original: 20,
    optimal: 200,
  },
  {
    name: 'WP3',
    original: 2223,
    optimal: 3022,
  },
]

const mach: Data = [
  {
    name: 'WP1',
    original: 240,
    optimal: 2250,
  },
  {
    name: 'WP2',
    original: 2012,
    optimal: 2330,
  },
  {
    name: 'WP3',
    original: 201223,
    optimal: 233022,
  },
]