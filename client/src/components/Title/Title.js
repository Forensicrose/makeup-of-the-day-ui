import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <header className='header'>
      <h2> {props.title} </h2>
    </header>
  );
};

export default Title;
