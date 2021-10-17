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
        <input id='Foundation' type='text' onChange={foundationChangeHandler} />
        <label htmlFor='Eyeshadow'>Eyeshadow</label>
        <input id='Eyeshadow' type='text' onChange={eyeshadowChangeHandler} />
        <label htmlFor='Eyeliner'>Eyeliner</label>
        <input id='Eyeliner' type='text' onChange={eyelinerChangeHandler} />
        <label htmlFor='Blush'>Blush</label>
        <input id='Blush' type='text' onChange={blushChangeHandler} />
        <label htmlFor='Lipstick'>Lipstick</label>
        <input id='Lipstick' type='text' onChange={lipstickChangeHandler} />
        <Button type='submit'>Add Makeup</Button>
      </form>
    </Card>
  );
};

export default Addmakeup;
