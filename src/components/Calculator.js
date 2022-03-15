/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import './style.css';
// import Operate from '../logic/operate';
// import Calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='flex h-screen py-16'>
        <section className='w-2/4 mx-auto bg-slate-200 grid grid-cols-4 grid-rows-6 divide-x-2 divide-y-2 divide-slate-300'>
          <div className='col-span-full bg-slate-500 text-5xl font-bold px-4 text-white border-none flex items-center justify-end'>
            0
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='AC' className='w-full h-full'>
              AC
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='+/-' className='w-full h-full'>
              +/-
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='%' className='w-full h-full'>
              %
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button type='button' name='÷' className='w-full h-full'>
              ÷
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='7' className='w-full h-full'>
              7
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='8' className='w-full h-full'>
              8
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='9' className='w-full h-full'>
              9
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button type='button' name='X' className='w-full h-full'>
              X
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='4' className='w-full h-full'>
              4
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='5' className='w-full h-full'>
              5
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='6' className='w-full h-full'>
              6
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button type='button' name='-' className='w-full h-full'>
              -
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='1' className='w-full h-full'>
              1
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='2' className='w-full h-full'>
              2
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='3' className='w-full h-full'>
              3
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button type='button' name='+' className='w-full h-full'>
              +
            </button>
          </div>
          <div className='col-span-2 flex justify-center items-center text-xl font-bold'>
            <button type='button' name='0' className='w-full h-full'>
              0
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button type='button' name='.' className='w-full h-full'>
              .
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button type='button' name='=' className='w-full h-full'>
              =
            </button>
          </div>
        </section>
      </main>
    );
  }
}

export default Calculator;
