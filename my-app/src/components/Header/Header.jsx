import React  from 'react'
import {NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';

import c from "./Header.module.scss"


export const Header = () => {
  return ( <header className={c.header}>
                <Container>
                    < nav>
                              <ul  className={c.ul} >
                                <li ><NavLink className={({ isActive }) => (isActive ? c.active : '')}  to="/">Main</NavLink></li>
                                <li ><NavLink className={({ isActive }) => (isActive ? c.active : '')} to="/charactersPage">Characters</NavLink></li>
                                <li><NavLink className={({ isActive }) => (isActive ? c.active : '')} to="/myWatchListPage">My Watch List</NavLink></li>
                              </ul>
                      </nav>
                </Container>
            </header>
  )      
};
