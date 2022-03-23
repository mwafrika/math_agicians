/* eslint-disable jsx-quotes */
import React from 'react';
import Header from './Header';

const Quotes = () => (
  <>
    <Header />
    <div className='flex flex-col mx-auto w-1/2 h-4/5 justify-between gap-10 mt-10 '>
      <h1 className='text-4xl text-slate-700'>Math Magician</h1>
      <p className='text-slate-600'>
        Mathmatics is not about numbers, equations, computations, or algorithms;
        It is about understanding. -William Paul Thurston
      </p>
    </div>
  </>
);

export default Quotes;
