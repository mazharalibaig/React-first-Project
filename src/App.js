import React,{Component} from 'react';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      message:"Quarantine Productivity",
      newTodo: '',
      todos: [{
        title: 'Learn React!',
        done: false
      },{
          title: 'Learn JSX!',
          done: false
      }]
    }
  }  
  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
    })
  }
  formSubmitted(event){
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos,{
        title: this.state.newTodo,
        done: false
      }]
    })
  }
  toggleTodoDone(event,index){
    
    const todos = [...this.state.todos];
    todos[index] = {...todos[index]};
    todos[index].done = event.target.checked;
    this.setState({
      todos
    });
  }
  removeTodo(index){
    const todos = [...this.state.todos];
    todos.splice(index,1); 
    this.setState({
      todos
    });
  }
  allDone(){
    const todos = this.state.todos.map(todo => {
      return{
        ...todo,
        done: true
      }
    });
    this.setState({
      todos
    });
  }
  removeAll(){
    const todos = [];
    this.setState({
      todos
    });
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.formSubmitted.bind(this)}>
          <label htmlFor = "newTodo">New Todo </label>
          <input onChange={this.newTodoChanged.bind(this)} id="newTodo" name="newTodo" value={this.state.newTodo}/>
          <button type ="submit">Add Todo</button>
        </form>
        <ol>
          {this.state.todos.map((todos,index) => (
            <li key={index}><input onChange={(event) => this.toggleTodoDone(event,index)}type="checkbox" checked={todos.done}/>
            <span style={{ textDecoration: todos.done ? 'line-through':'inherit'}}>{todos.title}</span>
            <button onClick={(index) => this.removeTodo(index)}>   Remove</button>
            </li>
          ))}
        </ol>
        <button onClick={() => this.allDone()}> All Done</button>
        <button onClick={() => this.removeAll()}> Remove All</button>
      </div>
    );
  }
}

export default App;
