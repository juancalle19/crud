import React, {useState} from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'

function App() {

  const [task, setTask] = useState("")
  const [tasks , setTasks] = useState([])
  const [editMode, seteditMode] = useState(false)
  const [id, setId] = useState("")

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
    
  }

  const deleteTask =(id) =>{

    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)

  }

  const editTask =(theTask) =>{
    setTask(theTask.name)
    seteditMode(true)
    setId(theTask.id)
    console.log(theTask)
  }

  const saveTask = (e) => {
    e.preventDefault()
    if(isEmpty(task)){
      console.log("Empty")
      return
    }
    
    const editedTasks = tasks.map(item => item.id === id ? {id, name : task} : item)
    setTasks(editedTasks)
    setTask("")
    seteditMode(false)
    setId("")
    
  }

  return (
    <div className = "container mt-5" >
      <h1>Tareas</h1>
      <hr/>

      <div className = "row">

        <div className ="col-8">
          <h4 className = "text-center">Listas de tareas</h4>
          <hr/>
          {
            size(tasks) === 0 ? (
              <h5 className = "text-center">No hay tareas</h5>
            ) : (

              <ul className = "list-group">
                {
                  tasks.map((tasks)=>(
                    <li className = "list-group-item" key ={tasks.id}>
                      <span className = "lead">{tasks.name}</span>
                      <button className = "btn btn-danger btn-sm float-right"
                      onClick = {()=> deleteTask(tasks.id)}>Eliminar</button>
                      <button className = "btn btn-warning btn-sm float-right mx-2"
                      onClick = {() => editTask(tasks)}>Editar</button>
                    </li>
                  ))
              
                }
              </ul>
            )
            
          }
        </div>
        <div className = "col-4">
          <h4 className = "text-center">{ editMode ? "Modificar Tarea" : "Agregar Tarea"}</h4>
          <hr/>
          <form onSubmit = {editMode ? saveTask : addTask}>
            <input className = "form-control mb-2"
            type= "text"
            placeholder = "Ingrese tarea"
            onChange = {(text) =>{setTask(text.target.value)}}
            value = {task}></input>
            <button className = {editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"}
            type = "submit">{ editMode ? "Guardar": "Agregar"}</button>
          </form>
        </div>

      </div>

    </div>

  )
  
}

export default App
