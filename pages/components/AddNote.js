import React, { useState } from 'react';

export default function AddNote({ addNote }) {
  const [data, setData] = useState({ data: '' });

  const handleInputChange = (e) => {
    setData({ data: e.target.value });
  };

  const submitNote = (e) => {
    e.preventDefault();
    addNote(data.data);
    setData({ data: '' });
  };

  return (
    <div className='form-group'>
      <form onSubmit={submitNote}>
        <input
          className='form-control'
          type='text'
          value={data.data}
          placeholder='Escribe una nota...'
          onSubmit={submitNote}
          onChange={handleInputChange}
        ></input>
      </form>
    </div>
  );
}
