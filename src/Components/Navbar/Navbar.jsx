import React from 'react';
import Form from '../Fragments/Form'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/category/Pokémon'>Pokémon</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/category/Trainers'>Trainers</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/category/Energy'>Energy</Link>
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
