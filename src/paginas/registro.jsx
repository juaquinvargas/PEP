import React from 'react'
import Menu_login from '../componentes/menu_login'
import Registro_usuario from '../componentes/registro_usuario'

function Registro(){
  return(
    <div className='Registro'>
      <Menu_login/>
      <Registro_usuario/>
    </div>
  );
}  

export default Registro