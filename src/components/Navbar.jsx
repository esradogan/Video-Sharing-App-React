import React from 'react';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { VideoCallOutlined } from '@mui/icons-material';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  display: flex;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 40%;
  border: 2px solid #ccc;
  border-radius: 10px;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 300px;
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px
`;
const Avatar = styled.img`
  width: 35px;
  height: 35px;
  flex: 1;
  border-radius: 50%;
  background-color: #999;
`;
const Navbar = () => {
  const { currUser } = useSelector((state) => state.user);
  console.log(' ka ', currUser);
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search something..."></Input>
          <SearchOutlinedIcon></SearchOutlinedIcon>
        </Search>

        {!currUser ? (
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        ) : (
          <User>
            <VideoCallOutlined></VideoCallOutlined>
            <Avatar></Avatar>
            {currUser.name}
          </User>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
