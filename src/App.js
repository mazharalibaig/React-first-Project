import React,{Component} from 'react';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      message:"Hello Coding Garden from State!!",
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
            <li key={index}>{todos.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
