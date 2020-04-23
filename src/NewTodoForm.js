import React from 'react';
const NewTodoForm = (props) => {
    return(
        <form onSubmit={props.formSubmitted}>
          <label className="lab" htmlFor = "newTodo">Enter New Todo: </label>
          <input className="inp form-control" onChange={props.newTodoChanged} placeholder="Kuch toh kaam karle" id="newTodo" name="newTodo" value={props.newTodo}/>
          <button className="submitbutton btn btn-default btn-lg btn-block" type ="submit">Add Todo</button>
        </form>
    );
}

export default NewTodoForm;