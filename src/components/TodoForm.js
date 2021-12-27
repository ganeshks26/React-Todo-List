import React from 'react'

function TodoForm({todo,setTodo,handleSubmit,editId}) {

    return (
        <div>
            <form className="todoForm" onSubmit={handleSubmit} >
                <input type="text" 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)} 
                />
                <button type="submit">{editId?"EDIT":"ADD"}</button>  
            </form>
        </div>
    )
}

export default TodoForm
