import React, { useEffect, useState } from 'react';

const Login = () => {
  // const Loguear = () => {
  //   console.log({ usuario, clave });
  //   let usu = JSON.parse(localStorage.getItem('usuario'));
  //   if (usu.usuario === usuario && usu.clave === clave) {
  //     localStorage.setItem(
  //       'usuario',
  //       JSON.stringify({ id: 1, usuario: 'admin', clave: '123', es: true })
  //     );
  //   }
  // };
  //   useEffect(() => {
  //     localStorage.setItem(
  //       'usuario',
  //       JSON.stringify({ id: 1, usuario: 'admin', clave: '123', es: false })
  //     );
  //   }, []);
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  return (
    <React.Fragment>
      {usuario && usuario.es ? (
        <CreaNota />
      ) : (
        <div>
          <div className='form-group mt-3'>
            <label>Usuario</label>
            <input
              type='text'
              className='form-control mt-1'
              placeholder='Ingrese usuario'
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className='form-group mt-3'>
            <label>Clave</label>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Ingrese su clave'
              onChange={(e) => setClave(e.target.value)}
            />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-primary' onClick={Loguear}>
              Ingresar
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
