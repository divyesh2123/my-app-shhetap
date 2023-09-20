import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewsList } from './asyncActions/newsasycaction';


export default function AddNews() {


    const dis = useDispatch();
   const [data,setdata]= useState({
        "description": "",
        "title":""
    })

    const handleSubmit = (e)=>{

        e.preventDefault();
       
        dis(addNewsList(data));

    }

    const handleInput = (e)=> {

        setdata({...data,[e.target.name]: e.target.value})


    }
  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name="title" onChange={handleInput}/>
        <input type='text'  name='description' onChange={handleInput}/>

        <input type='submit' value="save" />
        


    </form>
  )
}
