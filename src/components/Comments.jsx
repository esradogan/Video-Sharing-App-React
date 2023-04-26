import React from 'react';
import styled from 'styled-components';
import { Comment } from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

export const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://pbs.twimg.com/profile_images/1257258876975677441/TaZNP0py_400x400.jpg"></Avatar>
        <Input placeholder="Add a new comment.."></Input>
      </NewComment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>

    </Container>
  );
};
