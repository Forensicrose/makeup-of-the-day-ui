import React from 'react';
import Card from '../UI/Card';
import classes from './MakeupLook.module.css';

const MakeupLook = (props) => {
  return (
    <Card className={classes.makeup}>
      <ul>
        {props.makeup.map((item) => (
          <li>
            {item.foundation} {item.eyeshadow} {item.eyeliner} {item.blush}
            {item.lipstick}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MakeupLook;
