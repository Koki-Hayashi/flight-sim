import React from 'react'
import Layout from "../components/template/Layout";
import {flights} from "../data/flights";
import {FlightNumberPanel} from "../components/organisms/top/FlightNumberPanel";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`


const Index: React.FC = () => {
  return <Layout>
    <Wrapper>
      {flights.map(f => {
        return <FlightNumberPanel key={f.number} flightNumber={f.number}/>
      })}
    </Wrapper>
  </Layout>
}

export default Index
