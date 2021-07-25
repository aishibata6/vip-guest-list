import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.header}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          header={props.header}
          content={props.content}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
