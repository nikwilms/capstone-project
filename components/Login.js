import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Login = () => {
  return (
    <ContainerStyle>
      <LoginStyle>
        <h2>Please Sign In</h2>
        <StyledInput type='email' placeholder='email' />
        <StyledInput type='password' placeholder='password' />

        <Link href='/dashboard'>
          <a>
            <StyledButton type='submit'>Login</StyledButton>
          </a>
        </Link>
      </LoginStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LoginStyle = styled.form`
  border: none;
  text-align: left;
`;

const StyledInput = styled.input`
  color: white;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: lightgrey;
  border: none;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  all: unset;
  background: #72cf97;
  color: white;
  padding: 0.5rem;
  width: 100%;
  border-radius: 5px;
  text-align: center;
`;

export default Login;
