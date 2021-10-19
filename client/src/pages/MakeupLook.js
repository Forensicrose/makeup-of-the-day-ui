import React from 'react';
import Card from '../components/UI/Card';
import GoBack from '../components/GoBack/GoBack'
import classes from './MakeupLook.module.css';
import Button from '../components/UI/Button';

const MakeupLook = (props) => {
  return (
    <>
      <GoBack />
      <Card className={classes.makeup}>
        <ul>
          {props.makeup.map((item) => (
            <div key={item.id}>
              <li> {item.foundation} </li>
              <li>{item.eyeshadow}</li>
              <li>{item.eyeliner} </li>
              <li>{item.blush}</li>
              <li> {item.lipstick}</li>
              <Button
                type='button'
                onClick={() => {
                  alert('Your look has been saved!');
                }}
              >
                Save the look!
              </Button>
            </div>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default MakeupLook;
