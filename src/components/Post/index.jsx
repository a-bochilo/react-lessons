import React from "react";
import ButtonComponent from "../Button";
import ModalComponent from "../Modal";

import "./styles.scss";

const Post = (props) => {
  const {
    title,
    description,
    img,
    id,
    handleDeletePost,
    price,
    category,
    rating,
  } = props;

  return (
    <div className="post container mb-4 p-5">
      <div className="row">
        <div className="col-lg-3">
          <img className="post__img" src={img} alt="product_image"></img>
        </div>
        <div className="col-lg-8">
          <h1 className="post__title">{title}</h1>
          <ModalComponent
            title={title}
            description={description}
            price={price}
            category={category}
            rating={rating}
            img={img}
          />
          {/* <ButtonComponent
            label={buttonLabel}
            buttonClick={console.log("show more")}
            id={id}
          /> */}
          {/* <p className="post__subtitle">{subtitle}</p> */}
        </div>
        <div className="col-lg-1">
          <ButtonComponent
            label="Delete"
            buttonClick={handleDeletePost}
            btnStyle="danger"
            id={id}
          />
          <i class="bi bi-x-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default Post;
