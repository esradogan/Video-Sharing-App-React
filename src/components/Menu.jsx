import React from 'react';
import styled from 'styled-components';
import logo from '../img/youtube-play-red-logo.png';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 2px;
  font-weight: bold;
`;

const Img = styled.img`
  height: 25 px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
  padding: 7.5px 0px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`;

const Login = styled.div`
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Menu = ({ darkMode, setDarkMode }) => {

  const handleDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo}></Img>TubeDummy
        </Logo>
        <Item>
          <HomeIcon></HomeIcon>
          Home
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          Explore
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          Subscription
        </Item>
        <Hr></Hr>
        <Item>
          <HomeIcon></HomeIcon>
          Library
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          History
        </Item>
        <Hr></Hr>

        <Login>Sign into like videos, comment and subscribe </Login>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
        <Hr></Hr>
        <Title> Best of DummyTube</Title>
        <Item>
          <HomeIcon></HomeIcon>
          Music
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          Sports
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          Gaming
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          Movies
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          News
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          Live
        </Item>
        <Hr></Hr>
        <Item>
          <HomeIcon></HomeIcon>
          Settings
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          Report
        </Item>
        <Item>
          <HomeIcon></HomeIcon>
          Help
        </Item>
        <Item onClick={() => handleDarkMode()}>
          <HomeIcon></HomeIcon>
          Dark Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
