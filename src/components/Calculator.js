/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import './style.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='flex h-screen py-16'>
        <section className='w-2/4 mx-auto bg-orange-400 grid grid-cols-4 grid-rows-6 divide-x divide-y divide-slate-400'>
          <div className='col-span-full'>
            <input
              type='number'
              className='h-full w-full bg-slate-500  text-right text-5xl font-bold px-4 text-white border-none focus:outline-none'
              defaultValue={0}
            />
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            AC
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            +/-
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            %
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            ÷
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            7
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            8
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            9
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            X
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            4
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            5
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            6
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            -
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            1
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            2
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            3
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            +
          </div>
          <div className='col-span-2 flex justify-center items-center text-xl font-bold'>
            0
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            .
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            =
          </div>
        </section>
      </main>
    );
  }
}

export default Calculator;
