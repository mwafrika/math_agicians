/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import './style.css';
import Calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => ({
      ...state,
      ...Calculate(state, e.target.name),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <main className='flex h-screen py-16'>
        <section className='w-2/4 mx-auto bg-slate-200 grid grid-cols-4 grid-rows-6 divide-x-2 divide-y-2 divide-slate-300'>
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
              onClick={this.handleClick}
            >
              AC
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='+/-'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              +/-
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='%'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              %
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='÷'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              ÷
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='7'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              7
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='8'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              8
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='9'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              9
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='x'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              X
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='4'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              4
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='5'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              5
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='6'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              6
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='-'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              -
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='1'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              1
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='2'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              2
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='3'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              3
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='+'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              +
            </button>
          </div>
          <div className='col-span-2 flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='0'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              0
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold'>
            <button
              type='button'
              name='.'
              className='w-full h-full'
              onClick={this.handleClick}
            >
              .
            </button>
          </div>
          <div className='flex justify-center items-center text-xl font-bold bg-orange-400'>
            <button
              type='button'
              name='='
              className='w-full h-full'
              onClick={this.handleClick}
            >
              =
            </button>
          </div>
        </section>
      </main>
    );
  }
}

export default Calculator;
