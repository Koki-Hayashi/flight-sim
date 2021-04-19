import React from 'react'
import styled from "styled-components";
import {ToggleWithTitle} from "../molecules/ToggleWithTitle";
import {FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import {MODE} from "../../store/viewModel/lineChartVM";
import Link from "next/link";
import {Phase} from "../../data/dataSet";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const ButtonWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const ToggleWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

const SettingsWrapper = styled.div`
  margin: auto 0 20px
`


type ToggleHandler = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

export type Props = {
  phase: Phase,
  onChangePhase: (e: React.ChangeEvent<{ name?: string; value: unknown }>) => void,
  mode: MODE,
  onChangeMode: (e: React.ChangeEvent<{ name?: string; value: unknown }>) => void
  wind: ToggleHandler,
  temperature: ToggleHandler,
  pressure: ToggleHandler,
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SettingsPanel: React.FC<Props> = ({phase, onChangePhase, mode, onChangeMode, wind, temperature, pressure}) => {
  const classes = useStyles();

  return <Wrapper>
    <ButtonWrapper>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="phase-selector">Phase</InputLabel>
        <Select
          native
          value={phase.type}
          onChange={onChangePhase}
          inputProps={{
            name: 'phase',
            id: 'phase-selector',
          }}
        >
          <option aria-label="None" value=""/>
          <option value={'CLIMB'}>Climb</option>
          <option value={'CRUISE'}>Cruise</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="mode-selector">Mode</InputLabel>
        <Select
          native
          value={mode}
          onChange={onChangeMode}
          inputProps={{
            name: 'mode',
            id: 'mode-selector',
          }}
        >
          <option aria-label="None" value=""/>
          <option value={'FL'}>Flight Level</option>
          <option value={'FUEL_BURN'}>Fuel Burn</option>
          <option value={'IAS'}>IAS</option>
          <option value={'MACH'}>Mach</option>
        </Select>
      </FormControl>
    </ButtonWrapper>
    <ToggleWrapper>
      <ToggleWithTitle title={"Wind"} {...wind} />
      <ToggleWithTitle title={"Temperature"} {...temperature}/>
      <ToggleWithTitle title={"Pressure"} {...pressure}/>
    </ToggleWrapper>
    <SettingsWrapper>
      <Link href={'/settings'}>settings</Link>
    </SettingsWrapper>
  </Wrapper>
}