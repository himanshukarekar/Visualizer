import Header from './myComponents/Header';
import Todos from './myComponents/Todos';
import Footer from './myComponents/Footer';
import React, { useEffect, useState } from 'react';
import AddTodo from './myComponents/addTodo';
import About from './myComponents/about';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
   
    // deleteing using splice and index will not work in react

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  const addTodo = (task, desc) => {
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: task,
      description: desc
    }
    setTodos([...todos, myTodo]);

  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <Router>
      <Header title='My Todos List' />
      <Routes>
        <Route path="/" element={<>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



// Npx is used to run command one time not to download 
// Divided in different components
// Jsx - javascript syntax extension
// Not html
// Can use javascript in curly braces
// Have to wrap I anything can use <>. </> also
// While using bootstrap have to add closing / in the tag where there is not closing tags and also have to replace the class with className
// Props are javascript objects