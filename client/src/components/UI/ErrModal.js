import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrModal.module.css';

const ErrModal = (props) => {
  return (
    <>
      <div className={classes.background} onClick={props.onHandleErr}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onHandleErr}>Okay</Button>
        </footer>
      </Card>{' '}
    </>
  );
};

export default ErrModal;
