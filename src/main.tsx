import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.tsx'

import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  //Styles globaux
  * {
      margin:0;
      padding:0;
      box-sizing: border-box;
  }

  html {
    width:100%;
  }

  body {
    background-color: rgb(41, 37, 37);
    width:100%;
  }

  #root {
    width:100%;
  }


  //Textes et polices
  h1, h2, p {
      color:white;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 300;
  }
  
  h1 {
      font-size: 2.5rem;
      text-align: center;
      font-family: 'Anton', sans-serif;
  }
  
  h2 {
      font-size: 1.5rem;
  }
  
  p {
      line-height: 1.4rem;
      font-size: 1rem;
  }
  
  label, button, select {
      color:white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.9rem;
  }
  
  button, select {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 0.9rem;
  }
  
  a, Link {
      text-decoration: none;
      color:whitesmoke;
  }

`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
