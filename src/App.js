import React, {useState} from 'react'
import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {

  const [task, setTask] = useState("")
  const [tasks , setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if(isEmpty(task)){
      console.log("Empty")
      return
    }
    
    const newTask = {
      id: shortid.generate(),
      name : task
    }

    setTasks([...tasks,newTask])
    setTask("")
    return
  }

  return (
    <div className = "container mt-5" >
      <h1>Tareas</h1>
      <hr/>

      <div className = "row">

        <div className ="col-8">
          <h4 className = "text-center">Listas de tareas</h4>
          <hr/>
          <ul className = "list-group">
            {
              tasks.map((tasks)=>(
                <li className = "list-group-item" key ={tasks.id}>
                  <span className = "lead">{tasks.name}</span>
                  <button className = "btn btn-danger btn-sm float-right">Eliminar</button>
                  <button className = "btn btn-warning btn-sm float-right mx-2">Editar</button>
                </li>
              ))
              
            }
          </ul>
        </div>
        <div className = "col-4">
          <h4 className = "text-center">Formulario</h4>
          <hr/>
          <form onSubmit = {addTask}>
            <input className = "form-control mb-2"
            type= "text"
            placeholder = "Ingrese tarea"
            onChange = {(text) =>{setTask(text.target.value)}}
            value = {task}></input>
            <button className = "btn btn-dark btn-block"
            type = "submit">Agregar</button>
          </form>
        </div>

      </div>

    </div>

  )
  
}

export default App
