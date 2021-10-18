import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Addmakeup from './pages/Addmakeup';
import MakeupLook from './pages/MakeupLook';

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
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Switch>
      <Route path="/makeup">
        <Addmakeup onAddMakeup={addMakeupHandler} />
      </Route>
      <Route path="look">
        <MakeupLook makeup={makeupLook} />
      </Route>
    </Switch>
  );
}

export default App;
