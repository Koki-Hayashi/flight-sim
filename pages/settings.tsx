import React from 'react'
import Layout from '../components/template/Layout'
import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   
   height:100%
`

const Settings: React.FC = () => {

  return <Layout>
    <Wrapper>
      <img
        src={"/settings.png"}
        width={1200}
        height={700}
      />
    </Wrapper>
  </Layout>
}

export default Settings
