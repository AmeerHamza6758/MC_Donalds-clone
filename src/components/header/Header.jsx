import React, { useContext } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import image from '../images/HamzaLogo.png';
import { ThemeContext } from '../../App.js';

const Header = () => {
  const { themeMode, lightTheme, darkTheme } = useContext(ThemeContext); // Use useContext hook

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ?? 'coral',
      borderBottomWidth: isActive && 6,
      borderColor: 'coral',
    };
  };

  return (
    <div className='head1 '>
      <header className='head2'>
        <div className='image'>
          <img src={image} alt='Hamza Logo' />
        </div>
        <nav className='navitems'>
          <li>
            <NavLink style={activeStyle} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to='/contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to='github'>
              GitHub
            </NavLink>
          </li>
        </nav>
        <div className='navitems '>
          <li>
            <input
              type='checkbox'
              className='checkbox'
              id='checkbox'
              onChange={onChangeBtn}
              checked={themeMode === 'dark'}
            />

            <label htmlFor='checkbox' className='checkbox-label'>
              <i className='ri-moon-clear-line'></i>
              <i className='ri-sun-line'></i>
              <span className='ball'></span>
            </label>
          </li>
          <li id='lastItem'>
            <NavLink to='https://www.youtube.com/@RayofHope-pq2ne'>YouTube</NavLink>
          </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
