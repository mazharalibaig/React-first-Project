import React from 'react';


const TodoItem = (props) => {
    return(
        <div className="list custom-control custom-checkbox ">
            <li key={props.index}>
                <input onChange={(event) => props.toggleTodoDone(event,props.index)} type="checkbox" className="custom-control-input" name="cb" id = {props.index} checked={props.todos.done}/>
                <label for={props.index} className="strike custom-control-label" style={{ textDecoration: props.todos.done ? 'line-through':'inherit'}}>   {props.todos.title}</label>
                <button className="rembut btn btn-warning btn-md" onClick={() => props.removeTodo(props.index)}>Remove</button>
            </li>
        </div>
    );
}

export default TodoItem;

