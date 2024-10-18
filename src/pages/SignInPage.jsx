// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/quote';
import SignIn from '../molecules/SignIn';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('1234');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, otp);
      localStorage.setItem('token', response.token);
      navigate('/quotes');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div css={css`height: 80vh;display: flex; justify-content: center;align-items: center`}>
    <SignIn/>
    </div>
  );
};

export default SignInPage;
