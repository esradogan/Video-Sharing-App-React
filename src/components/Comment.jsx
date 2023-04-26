import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 15px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const CommentDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;

const Date = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
margin-left: 5px`;

const CommentText = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;

export const Comment = () => {
  return (
    <Container>
      <Avatar src="https://media.licdn.com/dms/image/D4D03AQGcFjdriyKo-w/profile-displayphoto-shrink_800_800/0/1672250904517?e=2147483647&v=beta&t=K6lYarg_wknoWOevkscqfmJY4bKXaBpzjYshVTL6UNQ"></Avatar>
      <CommentDetail>
        <Title>
          Esra Dogan <Date> 5 days ago</Date>
        </Title>
        <CommentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          gravida enim sed justo blandit, quis finibus erat pharetra. Maecenas
          quis dui justo. Nunc eget lobortis mi. Praesent maximus scelerisque
          quam, ultricies pretium dui condimentum tempus. Pellentesque ultricies
          pretium varius. Nullam molestie mi non consectetur consectetur
        </CommentText>
      </CommentDetail>
    </Container>
  );
};
