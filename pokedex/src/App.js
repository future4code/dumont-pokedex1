import React from 'react';
import Router from './routes/Router';
import GlobalState from './global/GlobalState';
import styled from 'styled-components';
import { lightBackground } from './constants/colors';

const MainContainer = styled.div`
  background: linear-gradient(45deg, #FFF, ${lightBackground});
  height: 100vh;

  @media (min-device-width: 320px) and (max-device-width: 420px) { 
    width: 100vw;
  }
`

const App = () => {
  return (
    <MainContainer>
      <GlobalState>
        <Router />
      </GlobalState>
    </MainContainer>
  );
}

export default App;