import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
        return (
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/players">Players</NavLink>
              <NavLink to="/5aside">Choose 5-a-side</NavLink>
              <NavLink to="/addplayer">Add a player</NavLink>
            </nav>
        );
    }

export default NavBar;
