import { useState } from 'react'
import React, { useReducer } from 'react';
import './App.css'

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        [action.color]: Math.min(255, state[action.color] + 1),
      };
    case 'DECREMENT':
      return {
        ...state,
        [action.color]: Math.max(0, state[action.color] - 1),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rgbColor = `rgb(${state.red}, ${state.green}, ${state.blue})`;

  return (
    <div className="main container mx-auto px-4  ">
      <h1 className="p-[25px] text-center font-bold text-[34px] text-yellow-100">
        Linear Gradient Color
      </h1>
      <div className="flex justify-center items-center">
        <div
          className="w-[550px] h-[400px] flex justify-center items-center border-2 border-yellow-100 "
          style={{
            backgroundColor: rgbColor,
            transition: "background-color 0.1s",
          }}
        ></div>
      </div>
      <div className="mt-[20px] flex justify-center items-center gap-14">
        {["red", "green", "blue"].map((color) => (
          <div key={color} className="flex flex-col  items-center">
            <div className="">
              <button
                onClick={() => dispatch({ type: "INCREMENT", color })}
                className="w-[50px] h-[50px] mr-[10px] px-4 py-2 font-semibold text-[20px] bg-white border border-transparent rounded-xl hover:bg-yellow-200"
              >
                +
              </button>
              <button
                onClick={() => dispatch({ type: "DECREMENT", color })}
                className="w-[50px] h-[50px] px-4 py-2 font-semibold text-[20px] bg-white border border-transparent rounded-xl hover:bg-yellow-200"
              >
                -
              </button>
            </div>
            <div className="text-[20px] font-bold capitalize  text-yellow-100 mt-[20px]">
              {color}: {state[color]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
