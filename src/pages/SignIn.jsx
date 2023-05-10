import axios from 'axios';
import React, { useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px 50px;
  border: 1px solid ${({ theme }) => theme.soft};
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 200px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.soft};
  border: none;
  color: ${({ theme }) => theme.textSoft};
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const More = styled.div`
  display: flex;
  font-size: 15px;
  margin-top: 10px;
  color: ${({ theme }) => theme.textSoft};
`;
const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 10px;
`;
export const SignIn = () => {
  const handleSubmit = useCallback(() => {
    try {
      const auth = axios.post('/signin', { username: '', password: '' });
    } catch (error) {}
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to DummyTube</SubTitle>
        <Input placeholder="Username"></Input>
        <Input placeholder="Password" type="password"></Input>
        <Button onClick={handleSubmit()}>Sign In</Button>
        <Title>or</Title>
        <Input placeholder="Username"></Input>
        <Input placeholder="Email"></Input>
        <Input placeholder="Password" type="password"></Input>
        <Button>Sign Up</Button>
      </Wrapper>{' '}
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>

          <Link>Terms</Link>
          <Link>Privacy</Link>
        </Links>
      </More>
    </Container>
  );
};
