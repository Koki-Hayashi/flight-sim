import * as React from 'react';
import styled from 'styled-components';
import {CircularProgress, Modal as _Modal} from '@material-ui/core';
import {defaultTheme} from '../utils';


const Modal = styled(_Modal)`
  margin: auto auto;
  height: 80px;
  width: 80px;
  opacity: 0.2;    
`

const ModalContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${defaultTheme.background};
`

export const LoadingView: React.FC = () => {

  return <Modal
    open={true}
    css={`background-color: ${defaultTheme.background}`}

  >
    <ModalContentDiv>
      <CircularProgress/>
    </ModalContentDiv>

  </Modal>
}

