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
  const [usuario, setUsuario] = useState(false);
  const [usu, setUsu] = useState('');
  const [clave, setClave] = useState('');
  useEffect(() => {
    //console.log(localStorage.getItem('notes'));
    setUsuario(
      localStorage.getItem('usuario')
        ? JSON.parse(localStorage.getItem('usuario'))
        : false
    );
  }, [usuario]);

  const CerrarSesion = () => {
    console.log('cerrar sesion');
    setUsuario(false);
    localStorage.removeItem('usuario');
  };

  const Loguear = () => {
    let usua = JSON.parse(localStorage.getItem('usuario'));
    if (usu === 'admin' && clave === '123') {
      setUsuario(true);
      localStorage.setItem('usuario', JSON.stringify(true));
    }
    console.log('wtf');
  };
  //   useEffect(() => {
  //     localStorage.setItem(
  //       'usuario',
  //       JSON.stringify({ id: 1, usuario: 'admin', clave: '123', es: false })
  //     );
  //   }, []);

  return (
    <React.Fragment>
      {usuario && usuario === true ? (
        <React.Fragment>
          <button
            onClick={() => CerrarSesion()}
            className='btn btn-danger'
            style={{ margin: '10px' }}
          >
            Cerrar sesion
          </button>
          <CreaNota />
        </React.Fragment>
      ) : (
        <div className='LoginPage'>
          <div className='form-group mt-3 '>
            <label>Usuario</label>
            <input
              type='text'
              className='form-control mt-1'
              placeholder='Ingrese usuario'
              onChange={(e) => setUsu(e.target.value)}
            />
          </div>
          <div className='form-group mt-3' style={{ paddingLeft: '10px' }}>
            <label>Clave</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Ingrese su clave'
              onChange={(e) => setClave(e.target.value)}
            />
          </div>

          <div
            className='form-group mt-6'
            style={{ marginTop: '40px', paddingLeft: '10px' }}
          >
            <button type='submit' className='btn btn-primary' onClick={Loguear}>
              Ingresar
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '4rem',
};

export default App;
