import React,{useState} from "react";

const EditForm=({editTodo,task})=>{
  const [value,setValue]=useState(task.task)

  const handleSubmit = (e)=>{
   e.preventDefault();
    editTodo(value,task.id)
    setValue('')
  }
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" name="" id="" className="todo-input" placeholder="Update Task"
      onChange={e=>{setValue(e.target.value)}}
      value={value}
      />
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  )
}

export default EditForm;