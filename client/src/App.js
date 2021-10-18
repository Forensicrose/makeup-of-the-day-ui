import React, { useState } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Addmakeup from './pages/Addmakeup';
import MakeupLook from './pages/MakeupLook';
import './index.css';


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
      <Route path='/' exact>
        <Redirect to='/makeup'></Redirect>
      </Route>
      <Route path='/makeup'>
        <Addmakeup onAddMakeup={addMakeupHandler} />
      </Route>
      <Route path='/look'>
        <MakeupLook makeup={makeupLook} />
      </Route>
    </Switch>
  );
}

export default App;
