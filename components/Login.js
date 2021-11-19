import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from './Button';

const Login = () => {
  return (
    <StyledLogin>
      <h2>Please Sign In</h2>
      <StyledInput type='email' placeholder='email' />
      <StyledInput type='password' placeholder='password' />

      <Link href='/dashboard'>
        <a>
          <Button type='submit'>Login</Button>
        </a>
      </Link>
    </StyledLogin>
  );
};

const StyledLogin = styled.form`
  border: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 15rem;
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

export default Login;
