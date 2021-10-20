import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../components/Title/Title';
import ErrModal from '../components/UI/ErrModal';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import classes from '../pages/Addmakeup.module.css';

const Addmakeup = (props) => {
  const history = useHistory();
  const [enteredFoundation, setEnteredFoundation] = useState('');
  const [enteredEyeshadow, setEnteredEyeshadow] = useState('');
  const [enteredEyeliner, setEnteredEyeliner] = useState('');
  const [enteredBlush, setEnteredBlush] = useState('');
  const [enteredLipstick, setEnteredLipstick] = useState('');
  const [error, setError] = useState();

  const addMakeupHandler = (event) => {
    event.preventDefault();

    if (
      enteredFoundation.length === 0 ||
      enteredEyeshadow.length === 0 ||
      enteredEyeliner.length === 0 ||
      enteredBlush.length === 0 ||
      enteredLipstick.length === 0
    ) {
      setError({
        title: 'Invalid input!',
        message: 'Please complete entire form!',
      });

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
    history.push('./look');
  };

  const ErrHandler = () => {
    setError(null);
  };

  

  return (
    <>
      <Title title={'Get the look!'} />
      {error && (
        <ErrModal
          title={error.title}
          message={error.message}
          onHandleErr={ErrHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addMakeupHandler}>
          <label htmlFor='Foundation'>Foundation</label>

          <select
            name='Foundation'
            id='Foundation'
            value={enteredFoundation}
            onChange={(event) => {
              setEnteredFoundation(event.target.value);
            }}
          >
            <option value='' disabled></option>
            <option value='Fenty Beauty Soft Matte'>Fenty Beauty</option>
            <option value='Huda Beauty #Faux Filter'>Huda Beauty</option>
            <option value='Flesh Beauty'>Flesh Beauty</option>
            <option value='Too Faced Beauty'>Too Faced Beauty</option>
            <option value='Cover FX Beauty'>Cover FX Beauty</option>
          </select>
          <label htmlFor='Eyeshadow'>Eyeshadow</label>
          <select
            name='Eyeshadow'
            id='Eyeshadow'
            value={enteredEyeshadow}
            onChange={(event) => {
              setEnteredEyeshadow(event.target.value);
            }}
          >
            <option value='' disabled></option>
            <option value='Naked'>Naked</option>
            <option value='Norvina'>Norvina</option>
            <option value='Tarlette'>Tarlette</option>
            <option value='Huda'>Huda</option>
            <option value='Nars'>Nars</option>
          </select>
          <label htmlFor='Eyeliner'>Eyeliner</label>
          <select
            name='Eyeliner'
            id='Eyeliner'
            value={enteredEyeliner}
            onChange={(event) => {
              setEnteredEyeliner(event.target.value);
            }}
          >
            <option value='' disabled></option>
            <option value='Marc Jacobs'>Marc Jacobs</option>
            <option value='NYX'>NYX</option>
            <option value='Maybelline'>Maybelline</option>
            <option value='Stila'>Stila</option>
            <option value='Lancome'>Lancome Drama</option>
          </select>
          <label htmlFor='Blush'>Blush</label>
          <select
            name='Blush'
            id='Blush'
            value={enteredBlush}
            onChange={(event) => {
              setEnteredBlush(event.target.value);
            }}
          >
            <option value='' disabled></option>
            <option value='Milani'>Milani</option>
            <option value='Morpe'>Morpe</option>
            <option value='NARS'>NARS</option>
            <option value='Nudestix'>Nudestix</option>
            <option value='Fenty'>Fenty</option>
          </select>
          <label htmlFor='Lipstick'>Lipstick</label>
          <select
            name='Lipstick'
            id='Lipstick'
            value={enteredLipstick}
            onChange={(event) => {
              setEnteredLipstick(event.target.value);
            }}
          >
            <option value='' disabled></option>
            <option value='Dior'>Dior</option>
            <option value='IT'>IT</option>
            <option value='Bobbi Brown'>Bobbi Brown</option>
            <option value='Revlon'>Revlon</option>
            <option value='Chanel'>Chanel</option>
          </select>
          <Button type='submit'>Get the Look!</Button>
        </form>
      </Card>
    </>
  );
};

export default Addmakeup;
