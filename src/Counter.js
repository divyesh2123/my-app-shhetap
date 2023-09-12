import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Increment } from './action/counteraction';

export default function Counter() {
   const counter = useSelector(y=>y);

   const disa= useDispatch();

   const couter = ()=> {

    disa(Increment())
   }
  return (
    <div>{counter}
    
        <button onClick={couter}>+</button>
    </div>
  )
}
