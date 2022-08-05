import React from 'react';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import Post from '../Post';

import { URL } from './constants';

const PostPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const dataFromBack = await response.json();
        setData(dataFromBack);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!data.length && <Loader />}
      {data.map((item) => (
        <Post
          key={item.id}
          title={item.title}
          subtitle={item.body}
          buttonLabel='Show more'
        />
      ))}
    </>
  );
};

export default PostPage;
