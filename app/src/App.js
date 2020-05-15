import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import NasaComponent from './components/NasaPicsComponent'

const MainContainer = styled.div`
/* background-image: url('https://wallpaperplay.com/walls/full/0/1/9/200801.jpg'); */
position: absolute;
text-align: center;
`

function App() {
  return (
    <MainContainer>
      <h6>Async Redux(React-Redux-App) </h6>

      <NasaComponent/>



    </MainContainer>
  );
}

export default App;
