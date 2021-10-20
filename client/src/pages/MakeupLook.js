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
            </div>
          ))}
          <Button
                type='button'
                onClick={props.reset}   
              >
                Save the look!
              </Button>
        </ul>
        
      </Card>
      
    </>
  );
};

export default MakeupLook;
