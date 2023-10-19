import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './App.css';
import Todo from './src/components/Todo'
import TodoWrapper from './src/components/TodoWrapper';


const App =()=>{
  return(
    <div className='App'>
        <TodoWrapper />
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)