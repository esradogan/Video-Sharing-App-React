import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
import  axios  from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/videos/${type}`);
        console.log('res', res);
        setVideos(res.data);

      } catch (error) {
        setError(error);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key = {video.id} video={video}></Card>
      ))}
    </Container>
  );
};
