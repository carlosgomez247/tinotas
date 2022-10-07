import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Note(props) {
  const { id, data } = props.note || {};

  const { nota, setNota } = useState([]);

  const deleteNote = (e) => {
    props.delNote(id);
  };
  const Editar = (e, id) => {
    let arr = JSON.parse(localStorage.getItem('notes'));
    //let a = arr.notes.findIndex((x) => x.id === id);
    //console.log(a);
    const index = arr.notes.findIndex((item) => item.id === id);
    console.log(index);

    arr.notes[index] = Object.assign({}, arr.notes[index], {
      data: e.target.value,
    });

    localStorage.setItem('notes', JSON.stringify(arr));
  };
  return (
    <div className='card' style={cardStyle}>
      <button style={deleteBtnStyle} onClick={deleteNote}>
        Eliminar
      </button>
      <div className='card-body'>
        {/* <h4 className="card-title">Note Title</h4> */}
        {/* <p className='card-text'>{data}</p> */}
        <input
          type='text'
          defaultValue={data}
          onChange={(e) => Editar(e, id)}
        />
      </div>
    </div>
  );
}

const cardStyle = {
  margin: '4px',
  background:
    'repeating-linear-gradient(#FFFFF8, #FFFFF8 10px, #BCBAFF 10px, #BCBAFF 12px)',
  padding: '10px',
  position: 'relative',
};

const deleteBtnStyle = {
  border: 'none',
  background: 'none',
  maxWidth: '30px',
  position: 'absolute',
  right: '1px',
  top: '2px',
};
