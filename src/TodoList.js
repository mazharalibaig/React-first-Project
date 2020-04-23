import React from 'react';
import TodoItem from './TodoItem'

const TodoList = (props) => {
    return(
        <ul>
          {props.todos.map((todos,index) => (
              <TodoItem 
              key={index}
              index={index}
              todos={todos}
              toggleTodoDone={props.toggleTodoDone}
              removeTodo={props.removeTodo}
              />
          ))}
        </ul>
    );
}

export default TodoList;