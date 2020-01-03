import React, { useState } from "react";
// import ReactDom from "react-dom";
import Mbutton from "./components/button";
import Display from "./components/display";
// import { checkPropTypes } from "prop-types";
import Container from "@material-ui/core/Container"
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#718792',
        main: '#455a64',
        dark: '#1c313a',
        contrastText: '#fff',
      },
      secondary: {
        light: '#4f5b62',
        main: '#263238',
        dark: '#000a12',
        contrastText: '#fff',
      },
    },
  });


function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = incrementValue =>
    setCounter(counter + incrementValue);

  return (
    <Container fixed>
      <Mbutton onClickFunction={incrementCounter} increment={1} />
      <Mbutton onClickFunction={incrementCounter} increment={5} />
      <Mbutton onClickFunction={incrementCounter} increment={10} />
      <Mbutton onClickFunction={incrementCounter} increment={100} />
      <Display message={counter} />
    </Container>
  );
}

export default App;
