import React from 'react';


const TodoItem = (props) => {
    return(
        <li key={props.index}><input onChange={(event) => props.toggleTodoDone(event,props.index)}type="checkbox" checked={props.todos.done}/>
        <span style={{ textDecoration: props.todos.done ? 'line-through':'inherit'}}>{props.todos.title}</span>
        <button className="rembut" onClick={() => props.removeTodo(props.index)}>Remove</button>
        </li>
    );
}

export default TodoItem;