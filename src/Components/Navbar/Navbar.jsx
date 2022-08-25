import React from 'react';
import Form from '../Fragments/Form'
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">e-commerce</a>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" >Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Ayuda</a>
                </li>
              </ul>
              <CartWidget/>
              <Form contBuscar="Buscar" />
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar
