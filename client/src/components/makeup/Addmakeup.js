import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './Addmakeup.module.css';
import Button from '../UI/Button';

const Addmakeup = (props) => {
  const [enteredFoundation, setEnteredFoundation] = useState('');
  const [enteredEyeshadow, setEnteredEyeshadow] = useState('');
  const [enteredEyeliner, setEnteredEyeliner] = useState('');
  const [enteredBlush, setEnteredBlush] = useState('');
  const [enteredLipstick, setEnteredLipstick] = useState('');

  const addMakeupHandler = (event) => {
    event.preventDefault();
    if (
      enteredFoundation.trim().length === 0 &&
      enteredEyeshadow.trim().length === 0 &&
      enteredEyeliner.trim().length === 0 &&
      enteredBlush.trim().length === 0 &&
      enteredLipstick.trim().length === 0
    ) {
      return;
    }

    props.onAddMakeup(
      enteredFoundation,
      enteredEyeshadow,
      enteredEyeliner,
      enteredBlush,
      enteredLipstick
    );
    setEnteredFoundation('');
    setEnteredEyeshadow('');
    setEnteredEyeliner('');
    setEnteredBlush('');
    setEnteredLipstick('');
  };

  const foundationChangeHandler = (event) => {
    setEnteredFoundation(event.target.value);
  };

  const eyeshadowChangeHandler = (event) => {
    setEnteredEyeshadow(event.target.value);
  };

  const eyelinerChangeHandler = (event) => {
    setEnteredEyeliner(event.target.value);
  };

  const blushChangeHandler = (event) => {
    setEnteredBlush(event.target.value);
  };

  const lipstickChangeHandler = (event) => {
    setEnteredLipstick(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addMakeupHandler}>
        <label htmlFor='Foundation'>Foundation</label>
        <input
          id='Foundation'
          type='text'
          value={enteredFoundation}
          onChange={foundationChangeHandler}
        />
        <label htmlFor='Eyeshadow'>Eyeshadow</label>
        <input
          id='Eyeshadow'
          type='text'
          value={enteredEyeshadow}
          onChange={eyeshadowChangeHandler}
        />
        <label htmlFor='Eyeliner'>Eyeliner</label>
        <input
          id='Eyeliner'
          type='text'
          value={enteredEyeliner}
          onChange={eyelinerChangeHandler}
        />
        <label htmlFor='Blush'>Blush</label>
        <input
          id='Blush'
          type='text'
          value={enteredBlush}
          onChange={blushChangeHandler}
        />
        <label htmlFor='Lipstick'>Lipstick</label>
        <input
          id='Lipstick'
          type='text'
          value={enteredLipstick}
          onChange={lipstickChangeHandler}
        />
        <Button type='submit'>Get the Look!</Button>
      </form>
    </Card>
  );
};

export default Addmakeup;
