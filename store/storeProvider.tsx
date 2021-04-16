import * as React from 'react';
import {createContext, Dispatch, useReducer} from 'react';
import {LineChartVM, lineChartVMReducer} from './viewModel/lineChartVM';
import _app from "next/app";

type ContextProps = {

  lineChartVM: LineChartVM,
  lineChartDispatch: Dispatch<LineChartVM>
};

export const StoreContext = createContext({} as ContextProps);

export const StoreContextProvider: React.FC = ({children}) => {
  const [lineChartVM, lineChartDispatch]: [LineChartVM, Dispatch<LineChartVM>] = useReducer(lineChartVMReducer, new LineChartVM())

  const states = {
    lineChartVM
  };

  const dispatches = {
    lineChartDispatch
  }

  return <StoreContext.Provider value={{...states, ...dispatches}}>{children}</StoreContext.Provider>
}
