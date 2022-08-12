import React from "react";
import { useEffect, useState } from "react";
import ButtonComponent from "../Button";
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

  function deletePost(id) {
    const filtredPosts = data.filter((item) => item.id !== id);
    setData(filtredPosts);
  }

  function deleteAllPosts() {
    setData([]);
  }

  return (
    <>
      {error && <div>{error.message}</div>}
      {!data && !error && <Loader />}
      <div className="container p-3">
        <ButtonComponent
          label="Delete All"
          buttonClick={deleteAllPosts}
          btnStyle="danger"
        />
        {data &&
          data.map(
            ({ id, title, description, image, price, category, rating }) => (
              <Post
                key={id}
                title={title}
                description={description}
                img={image}
                buttonLabel={BUTTON_LABEL}
                id={id}
                handleDeletePost={deletePost}
                price={price}
                category={category}
                rating={rating}
              />
            )
          )}
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
      </div>
    </>
  );
};

export default PostPage;
