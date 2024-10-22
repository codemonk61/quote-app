/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Styleguides from './Styleguides';
import Header from './layouts/Header';
import SignInPage from './pages/SignInPage';
import QuotePage from './pages/QuotePage';
import AuthContext from './AuthContext';


const globalStyles = css`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #f0f2ff;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }`

const App = () => {
 
  return (
    <AuthContext>
      <Global styles={globalStyles} />
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/quotepage" element={<QuotePage/>} />
          {/* <Route path="/styleguides" element={<Styleguides/>} /> */}
        </Routes>
      </Router>
    </AuthContext>
  );
};

export default App;
