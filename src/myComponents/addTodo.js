import React, { useState } from 'react';

const AddTodo = (props) => {
    const [ task , setTask] = useState("");
    const [ desc, setDesc]= useState("");
    const submit = (e)=>{
       e.preventDefault();
       if(!task || !desc){
        alert("title or desc can not be blank");
        return;
       }else{
       props.addTodo(task, desc );
       setDesc("");
       setTask("");
       }
    }
    return (
        <div className='container my-3'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Task</label>
                    <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} className="form-control" id="task" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-primary btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
