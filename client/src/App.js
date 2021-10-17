import React, { useState } from 'react';
import './index.css';
import Addmakeup from './components/makeup/Addmakeup';
import MakeupLook from './components/makeup/MakeupLook';

function App() {
  const [makeupLook, setMakeupLook] = useState([]);

  const addMakeupHandler = (foundation, eShadow, eLiner, blush, lStick) => {
    setMakeupLook((prevMakeupLook) => {
      return [
        ...prevMakeupLook,
        {
          foundation: foundation,
          eyeshadow: eShadow,
          eyeliner: eLiner,
          blush: blush,
          lipstick: lStick,
          id: Math.random().toString()
        },
      ];
    });
  };

  return (
    <div>
      <Addmakeup onAddMakeup={addMakeupHandler} />
      <MakeupLook makeup={makeupLook} />
    </div>
  );
}

export default App;
