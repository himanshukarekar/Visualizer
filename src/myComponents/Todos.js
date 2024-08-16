import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
    let myStyle= {
        minHeight: "10vh",
    }
  return (
    <div className='container' style={myStyle}>
        <h3 className=' my-3'>Todos List</h3>
        {props.todos.length===0? <h1>No Todos to display</h1>:
        props.todos.map((todo)=>{
           return (<><Todo todoitem = {todo} key = {todo.sno} onDelete = {props.onDelete}/><hr></hr></>)
        })
    }
         
    </div>
  )
}

export default Todos
