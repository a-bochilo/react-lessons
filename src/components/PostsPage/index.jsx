import React, { useEffect, useState, createContext, useRef } from "react";
import ButtonComponent from "../Button";
import InputGroup from "../InputGroup";
import Loader from "../Loader";
import Post from "../Post";

import { URL, BUTTON_LABEL } from "./constants";

import "./styles.scss";

const themes = {
  light: {
    color: "black",
    background: "rgb(245, 245, 245)",
  },
  dark: {
    color: "white",
    background: "black",
  },
};

export const UserContext = createContext();

const PostPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(5);
  const [error, setError] = useState({});
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");

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

  function filterProducts(event) {
    setTimeout(() => setQuery(event.target.value), 500);
  }

  function addNewPost(e) {
    const newProduct = {
      id: Date.now(),
      title: title,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      price: 695,
      category: "jewelery",
      rating: { rate: 4.6, count: 400 },
      deletePost: deletePost,
    };
    setData([newProduct, ...data]);
  }

  // const bodyInputRef = useRef();

  return (
    <UserContext.Provider value={themes.light}>
      {error && <div>{error.message}</div>}
      {!data && !error && <Loader />}

      <div className="container p-3">
        {/* <input ref={bodyInputRef} /> */}

        <InputGroup
          placeholder="Enter product name"
          label="Add new product"
          buttonClick={() => {
            addNewPost();
            document.querySelector(".input-group.mb-3 input").value = "";
          }}
          btnStyle="success"
          inputChange={(event) => setTitle(event.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setTimeout(() => setQuery(event.target.value), 500);
            // setQuery(event.target.value);
          }}
        />
        <ButtonComponent
          label="Delete All"
          buttonClick={deleteAllPosts}
          btnStyle="danger"
        /> */}
        <InputGroup
          placeholder="Search..."
          label="Delete all posts"
          buttonClick={deleteAllPosts}
          btnStyle="danger"
          inputChange={filterProducts}
        />
        {data &&
          data
            .filter((prod) => prod.title.trim().toLowerCase().includes(query))
            .map(
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
        <div className="button-block d-flex justify-content-center">
          <ButtonComponent
            label="More products"
            buttonClick={() => {
              setCount(count + 5);
            }}
            id="Date.now()"
            btnStyle="primary"
          />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default PostPage;
