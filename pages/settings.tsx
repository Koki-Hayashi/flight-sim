import React from 'react'
import Layout from '../components/template/Layout'
import Image from 'next/image'
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
      <Image
        src={"/settings.png"}
        layout={"intrinsic"}
        width={1200}
        height={700}
      />
    </Wrapper>
  </Layout>
}

export default Settings
