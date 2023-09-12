import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Increment } from './action/counteraction';
import { SUC } from './action/useraction';

export default function Counter() {
   const counter = useSelector(y=>y.count);

   const user = useSelector(y=>y.post)


   console.log(user);


   const disa= useDispatch();

   useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(y=>y.json())
    .then(y=> {
        disa(SUC(y));
    })

   },[])

   const couter = ()=> {

    disa(Increment())
   }
  return (
    <div>{counter}
    
        <button onClick={couter}>+</button>
    </div>
  )
}
