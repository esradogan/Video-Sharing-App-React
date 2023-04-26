import React from 'react';
import styled from 'styled-components';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { Comments } from '../components/Comments';
import { Card } from '../components/Card';

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
            title="[Oynatma Listesi] İş için caz müziği ve yağmur seslerinin yatıştırıcı listesi ☕🎧"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Yatıştırıcı Müzikler</Title>
        <Details>
          <Info>874.098 views - 1 month ago</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlinedIcon fontSize="small"></ThumbUpAltOutlinedIcon>
              23B
            </Button>
            <Button>
              <ThumbDownOutlinedIcon fontSize="small"></ThumbDownOutlinedIcon>
              Dislike
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
              <ChannelName>
                Yatıştırıcı Yazılım Geliştirici Müzikleri
              </ChannelName>
              <ChannelCounter>233,3K subscriber</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                gravida enim sed justo blandit, quis finibus erat pharetra.
                Maecenas quis dui justo. Nunc eget lobortis mi. Praesent maximus
                scelerisque quam, ultricies pretium dui condimentum tempus.
                Pellentesque ultricies pretium varius. Nullam molestie mi non
                consectetur consectetur. Aliquam facilisis massa orci, sed
                iaculis mauris rhoncus a. Mauris luctus pellentesque tortor,
                vitae congue eros rutrum id. Aenean at dictum nibh. Nam eu ante
                ac risus blandit congue vitae et lacus. Nunc vel nisi massa.
                Praesent eu erat mi. Fusce bibendum justo at arcu fringilla, at
                dictum eros tincidunt. Etiam eu quam ac erat imperdiet malesuada
                et ut magna.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <ChannelButton>Subscribe</ChannelButton>
        </Channel>

        <Hr></Hr>
        <Comments></Comments>
      </Content>
      <RecommendationSide>
        <Card type="small"></Card>
        <Card type="small"></Card>
      </RecommendationSide>
    </Container>
  );
};
