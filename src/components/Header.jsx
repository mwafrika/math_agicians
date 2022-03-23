/* eslint-disable jsx-quotes */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
  const data = [
    {
      id: 1,
      name: 'home',
      url: '/',
    },
    {
      id: 2,
      name: 'calculator',
      url: '/calculator',
    },
    {
      id: 3,
      name: 'quotes',
      url: '/quotes',
    },
  ];
  return (
    <header className='bg-slate-500 h-20 w-full flex justify-between px-5 items-center text-white'>
      <span className='text-2xl'>Logo</span>
      <ul className='flex justify-between w-1/5 text-lg sm:w-2/5 sm:gap-x-3 lg:w-1/3 xl:w-1/4 hide-menu'>
        {data.map(({ id, name, url }) => (
          <NavLink key={id} to={url}>
            <li>{name}</li>
          </NavLink>
        ))}
      </ul>
      <span className='hidden menu'>Menu</span>
    </header>
  );
};

export default Header;
