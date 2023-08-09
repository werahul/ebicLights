import React from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/other.css'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid nav_div">
          <NavLink className="navbar-brand nav_logo" to='/'>
            <h2>EBIC <WbIncandescentIcon/></h2>
          </NavLink>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to='/'>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/products'>
                  PRODUCTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>
                  CONTACT US
                </NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;