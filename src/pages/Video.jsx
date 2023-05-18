import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { Comments } from '../components/Comments';
import { Card } from '../components/Card';
import { useLocation } from 'react-router';
import axios from 'axios';
import { format } from 'timeago.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  dislike,
  fetchFailure,
  fetchStart,
  fetchSuccess,
  like,
} from '../redux/videosSlice';
import { subscription } from '../redux/usersSlice';

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Details = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin: 15px 0;
`;

const Info = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;

const RecommendationSide = styled.div`
  flex: 2;
  color: ${({ theme }) => theme.bg};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 15px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const ChannelButton = styled.button`
  display: flex;
  align-items: center;
  color: white;
  background-color: red;
  border: none;
  border-radius: 5px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export const Video = () => {
  const path = useLocation();
  const dispatch = useDispatch();

  const id = path.pathname?.split('/')[2];

  const { currVideo } = useSelector((state) => state.video);
  const { currUser } = useSelector((state) => state.user);

  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        await axios
          .get(`/videos/find/${id}`)
          .then((response) => {
            console.log('video', response);
            dispatch(fetchSuccess(response.data));
          })
          .catch((err) => {
            console.log(err);
          });

        await axios
          .get(`/users/find/${currVideo?.userId}`)
          .then((response) => {
            console.log('user', response);
            setChannel(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        dispatch(fetchFailure);
      }
    };
    fetchVideo();
  }, [currVideo?.userId, dispatch, id]);

  const handleLike = async () => {
    const likeRes = await axios.put(`/users/like/${currVideo._id}`);
    dispatch(like(currUser._id));
    console.log('Likee', likeRes);
  };

  const handleDislike = async () => {
    const dislikeRes = await axios.put(`/users/dislike/${currVideo._id}`);
    dispatch(dislike(currUser._id));
  };

  const handleSubscribe = async () => {
    await axios
      .put(`/users/subscribe/${channel.id}`)
      .then((res) => {
        dispatch(subscription(channel.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Esra Video Software"
            allow="accelerometer; autoplay; clipboard-write; enycypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}

          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/n_uFzLPYDd8"
            title={currVideo?.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>{currVideo?.title}</Title>
        <Details>
          <Info>
            {currVideo?.views} views - {format(currVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {channel?.likes?.includes(currUser._id) ? (
                <ThumbUpIcon fontSize="small"> </ThumbUpIcon>
              ) : (
                <ThumbUpAltOutlinedIcon fontSize="small"></ThumbUpAltOutlinedIcon>
              )}
              {currVideo?.likes?.length}
            </Button>
            <Button onClick={() => handleDislike()}>
              {channel?.dislikes?.includes(currUser._id) ? (
                <ThumbDownAltIcon fontSize="small"> </ThumbDownAltIcon>
              ) : (
                <ThumbDownOutlinedIcon fontSize="small"></ThumbDownOutlinedIcon>
              )}
              {currVideo?.dislikes?.length}
            </Button>
            <Button>
              <ReplyOutlinedIcon fontSize="small"></ReplyOutlinedIcon>
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon fontSize="small"></AddTaskOutlinedIcon>
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr></Hr>

        <Channel>
          <ChannelInfo>
            <Avatar src="https://pbs.twimg.com/profile_images/1257258876975677441/TaZNP0py_400x400.jpg"></Avatar>
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>233,3K subscriber</ChannelCounter>
              <Description>{currVideo?.description}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <ChannelButton onClick={handleSubscribe}>
            {channel?.subscribedUsers.includes(currUser._id)
              ? 'SUBSCRIBED'
              : 'SUBSCRIBE'}
          </ChannelButton>
        </Channel>

        <Hr></Hr>
        <Comments></Comments>
      </Content>
      {/* <RecommendationSide>
        <Card type="small"></Card>
        <Card type="small"></Card>
      </RecommendationSide> */}
    </Container>
  );
};
