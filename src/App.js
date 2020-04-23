import React,{Component} from 'react';
import NewTodoForm from './NewTodoForm';
import './App.css';
import TodoList from './TodoList';
//import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="App px-auto">
        <h1 className="header" >{this.state.message}</h1>
        <div className="rest">
        <NewTodoForm formSubmitted={this.formSubmitted.bind(this)} newTodoChanged={this.newTodoChanged.bind(this)} newTodo={this.state.newTodo}/>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo.bind(this)} toggleTodoDone={this.toggleTodoDone.bind(this)}/>
        <div className="endbut">
          <button className="alldone btn btn-success btn-block" onClick={() => this.allDone()}> All Done</button>
          <button className="removeall btn btn-danger btn-block" onClick={() => this.removeAll()}> Remove All</button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
