import React, { useState, useEffect } from 'react';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import 'bootstrap/dist/css/bootstrap.css';

import { v4 as uuidv4 } from 'uuid';

const sampleNotes = {
  notes: [],
};

const App = () => {
  const [state, setState] = useState(sampleNotes);
  // // const [state, setState] = useState(
  // //   localStorage.getItem('notes')
  // //     ? JSON.parse(localStorage.getItem('notes'))
  // //     : sampleNotes
  // // );

  // useEffect(() => {
  //   useState(
  //     localStorage.getItem('notes')
  //       ? JSON.parse(localStorage.getItem('notes'))
  //       : sampleNotes
  //   );
  // }, state);

  // const [state, setState] = useState(sampleNotes);
  // useEffect(() => {
  //   useState(
  //     localStorage.getItem('notes')
  //       ? JSON.parse(localStorage.getItem('notes'))
  //       : sampleNotes
  //   );
  // }, state);

  const addNote = (data) => {
    const newNote = {
      id: uuidv4(),
      data,
    };
    setState({ notes: [...state.notes, newNote] });
  };

  const delNote = (id) => {
    setState({
      notes: [...state.notes.filter((note) => note.id != id)],
    });
  };

  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(state));
  // });

  return (
    <div className='container' style={{ marginTop: '10vh' }}>
      <h1 style={titleStyle}>Tinotas</h1>
      <Notes notes={state.notes} delNote={delNote} />
      <AddNote addNote={addNote} />
    </div>
  );
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '4rem',
};

export default App;
