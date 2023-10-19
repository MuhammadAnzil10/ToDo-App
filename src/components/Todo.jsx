import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo =({task,toggleComplete,deleteTodo,editTodo})=>{
console.log(task);
  return(
    <div className="Todo">
      <p className={task.completed ? 'completed' : ''} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon  icon={faPenToSquare} onClick={e=>{editTodo(task.id)}}/>
        <FontAwesomeIcon  icon={faTrash} onClick={e=>{deleteTodo(task.id)}} />
      </div>
    </div>
  )
}

export default Todo;