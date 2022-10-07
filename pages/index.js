import React, { useState, useEffect } from 'react';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.css';

import { v4 as uuidv4 } from 'uuid';
import CreaNota from './components/CreaNota';

const sampleNotes = {
  notes: [],
};

const App = () => {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    //console.log(localStorage.getItem('notes'));
    setUsuario(
      localStorage.getItem('usuario')
        ? JSON.parse(localStorage.getItem('usuario'))
        : null
    );
  }, []);

  return (
    <React.Fragment>
      <CreaNota />
    </React.Fragment>
  );
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '4rem',
};

export default App;
