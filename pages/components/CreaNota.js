import React, { useState, useEffect } from 'react';
import AddNote from './AddNote';
import Notes from './Notes';

import 'bootstrap/dist/css/bootstrap.css';

import { v4 as uuidv4 } from 'uuid';

const sampleNotes = {
  notes: [],
};

const CreaNota = () => {
  const [state, setState] = useState(sampleNotes);
  //const [usuario, setUsuario] = useState({});
  useEffect(() => {
    //console.log(localStorage.getItem('notes'));
    setState(
      localStorage.getItem('notes')
        ? JSON.parse(localStorage.getItem('notes'))
        : sampleNotes
    );
  }, []);

  const addNote = (data) => {
    const newNote = {
      id: uuidv4(),
      data,
    };
    setState({ notes: [...state.notes, newNote] });
  };

  const delNote = (id) => {
    setState({
      notes: [...state.notes.filter((note) => note?.id != id)],
    });
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state));
  }, [state]);

  return (
    <div className='container' style={{ marginTop: '10vh' }}>
      <h1 style={titleStyle}>Tinotas</h1>

      <Notes notes={state?.notes} delNote={delNote} />
      <AddNote addNote={addNote} />
    </div>
  );
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '4rem',
};

export default CreaNota;
