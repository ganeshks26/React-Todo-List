import React from 'react'

function TodoList({ todos,handleDelete,handleEdit }) {
    return (
        <ul className="allTodos">
            {todos.map((t)=>(
            <li className="singleTodo">
                <span className="todoText" key={t.id}>{t.todo}</span>
                <i className="fas fa-edit edit" onClick={()=>handleEdit(t.id)}></i>
               <i className="fas fa-trash delete" onClick={()=>handleDelete(t.id)}></i>
            </li>
            ))}
        </ul>
    )
}

export default TodoList
