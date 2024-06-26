import { useState } from "react"
import {useDispatch } from 'react-redux'
import {addTask} from '../features/tasks/taskSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'

export function TaskForm(){

  const [task,setTask]= useState({
    title:'',
    description:''
  });;

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]:e.target.value,
  })
  };

  function handleSubmit(e){
    e.preventDefault();
    dispatch(addTask({
      ...task,
      id:uuid(),
    }))
    navigate('/') 
  }
  //Instanciando los Hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()



    return(
      <form onSubmit={handleSubmit}>
        <input name="title" 
        type="text" placeholder="title"
        onChange={handleChange}></input>
        <textarea name="description" placeholder="description" onChange={handleChange}></textarea>
        <button>guardar</button>
      </form>
    
       
    )
}

