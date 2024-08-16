import React from 'react'

const Todo = ({todoitem, onDelete}) => {
  return (
    <div>
        <h4>{todoitem.title}</h4>
        <p>{todoitem.description}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todoitem)}} >Delete</button>

    </div>
  )
}

export default Todo
