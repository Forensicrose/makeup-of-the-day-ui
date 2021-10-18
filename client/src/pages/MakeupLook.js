import React from 'react';
import Card from '../components/UI/Card';
import classes from './MakeupLook.module.css';

const MakeupLook = (props) => {
  return (
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
      </ul>
    </Card>
  );
};

export default MakeupLook;
