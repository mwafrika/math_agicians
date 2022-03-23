/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import './style.css';
import Calculate from '../logic/calculate';
import Header from './Header';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => ({
      ...state,
      ...Calculate(state, e.target.name),
    }));
  };

  const { total, next, operation } = state;

  return (
    <>
      <Header />
      <main className='flex h-screen py-12 justify-center gap-x-56 mx-10 sm:flex sm:gap-x-8 md:gap-x-16 lg:gap-x-20 xl:gap-x-40 main'>
        <section className='separator'>
          <div className='flex flex-col justify-center text-center gap-8 text-container'>
            <h1 className='text-4xl text-slate-700 title'>Math Magician</h1>
            <h1 className='text-xl text-slate-600'>
              Let&apos;s us do some math!
            </h1>
          </div>
        </section>
        <section className='w-2/4 bg-slate-200 grid grid-cols-4 grid-rows-6 divide-x-2 divide-y-2 divide-slate-300 calculator'>
          <div className='col-span-full bg-slate-500 text-5xl font-bold px-4 text-white border-none flex items-center justify-end'>
            {total}
            {operation}
            {next}
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='AC'
              className='w-full h-full'
              onClick={handleClick}
            >
              AC
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='+/-'
              className='w-full h-full'
              onClick={handleClick}
            >
              +/-
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='%'
              className='w-full h-full'
              onClick={handleClick}
            >
              %
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='÷'
              className='w-full h-full'
              onClick={handleClick}
            >
              ÷
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='7'
              className='w-full h-full'
              onClick={handleClick}
            >
              7
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='8'
              className='w-full h-full'
              onClick={handleClick}
            >
              8
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='9'
              className='w-full h-full'
              onClick={handleClick}
            >
              9
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='x'
              className='w-full h-full'
              onClick={handleClick}
            >
              X
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='4'
              className='w-full h-full'
              onClick={handleClick}
            >
              4
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='5'
              className='w-full h-full'
              onClick={handleClick}
            >
              5
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='6'
              className='w-full h-full'
              onClick={handleClick}
            >
              6
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='-'
              className='w-full h-full'
              onClick={handleClick}
            >
              -
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='1'
              className='w-full h-full'
              onClick={handleClick}
            >
              1
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='2'
              className='w-full h-full'
              onClick={handleClick}
            >
              2
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='3'
              className='w-full h-full'
              onClick={handleClick}
            >
              3
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='+'
              className='w-full h-full'
              onClick={handleClick}
            >
              +
            </button>
          </div>
          <div className='col-span-2 flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='0'
              className='w-full h-full'
              onClick={handleClick}
            >
              0
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='.'
              className='w-full h-full'
              onClick={handleClick}
            >
              .
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='='
              className='w-full h-full'
              onClick={handleClick}
            >
              =
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Calculator;
