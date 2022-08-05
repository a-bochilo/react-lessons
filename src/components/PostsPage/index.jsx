import React from "react";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Post from "../Post";

import { URL, BUTTON_LABEL } from "./constants";

import "./styles.scss";

const PostPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(5);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}${count}`);
        const dataFromBack = await response.json();
        setData(dataFromBack);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchData();
  }, [count]);

  return (
    <>
      {error && <div>{error.message}</div>}
      {!data.length && !error && <Loader />}
      {data &&
        data.map(({ id, title, description, image }) => (
          <Post
            key={id}
            title={title}
            subtitle={description}
            img={image}
            buttonLabel={BUTTON_LABEL}
          />
        ))}
      <div className="button-block">
        <button
          className="more-pro-btn"
          onClick={() => {
            setCount(count + 5);
          }}
        >
          More products
        </button>
      </div>
    </>
  );
};

export default PostPage;
