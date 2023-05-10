import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'timeago.js';

const Container = styled.div`
  width: ${(props) => props.type !== 'small' && '360px'};
  margin-bottom: ${(props) => (props.type === 'small' ? '10px' : '45px')};
  cursor: pointer;
  display: ${(props) => props.type === 'small' && 'flex'};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'small' ? '120px' : '220px')};
  flex: 1;
`;

const Detail = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === 'small' ? '10px' : '20px')};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === 'small' && 'none'};
`;

const DetailText = styled.div`
  padding-left: 10px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;
const ChannelName = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 4px;
`;
const Info = styled.h3`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

export const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const res = await axios.get(`/users/find/${video.userId}`);
        console.log('res', res);
        setChannel(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchChannels();
  }, [video.userId]);

  return (
    <Link to="/video/test" style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl}></Image>
        <Detail>
          <ChannelImage
            type={type}
            src="https://pbs.twimg.com/profile_images/1257258876975677441/TaZNP0py_400x400.jpg"
          ></ChannelImage>{' '}
          <DetailText type={type}>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views - {format(video.createdAt)}
            </Info>
          </DetailText>
        </Detail>
      </Container>
    </Link>
  );
};
