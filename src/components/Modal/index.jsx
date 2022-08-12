import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalComponent = ({
  title,
  description,
  price,
  category,
  rating,
  img,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Show more
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="container">{title}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row p-2">
              <div className="col-12 d-flex justify-content-center pb-4">
                <img style={{ width: "300px" }} src={img} alt="product" />
              </div>
              <div className="col-12 pb-2">{description}</div>
              <div className="col-12 pb-2">{`Category: ${category}`}</div>
              <div className="col-12 pb-2">{`Raiting: ${rating.rate}`}</div>
              <div className="col-12 ">{`Price: $${price}`}</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
