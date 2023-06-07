import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { CgCloseR } from 'react-icons/cg';
import { AiTwotoneEdit } from 'react-icons/ai';

function Todo({ todos, completeTodo,removeTodo,updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const SubmitUpdate = value => {
    updateTodo(edit.id,value)
    setEdit({
        id:null,
        value: ''
    })
  }
  if (edit.id){
    return <TodoForm edit={edit} onSubmit={SubmitUpdate}/>;
  }



  return todos.map((todo) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <CgCloseR 
        onClick={()=> removeTodo(todo.id)}
        className='delete-icon'
         />
        <AiTwotoneEdit
        onClick={()=> setEdit({id:todo.id,value:todo.text })}
        className='edit-icon'
         />
      </div>
    </div>
  ));
}

export default Todo;
