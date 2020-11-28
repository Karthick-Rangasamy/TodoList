import React, { Component } from 'react';
import './App.css'
import ToDoItem from './ToDoItem';

class App extends Component{

  constructor(props) {
    super(props);
    this.state={
      TodoList: [],
      input: '',
      default:''
    }
  }

  ClickonAdd = (event) => {
    let id = Math.random();
    if (this.state.input !== '') {
      let value = this.state.input;
      const obj = { id, value };
      this.setState({
        TodoList: [...this.state.TodoList, obj],
        input:''
      })
      
    }
  }

  InputonChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  ClickonDelete = (index) => {
    const newlist = this.state.TodoList.filter(item => { return item.id !== index });
    this.setState({
      TodoList:newlist
    })
  }

  render = () => {
    return (
      <div >
        <form className="App">
        <h1 style={{color:"blue"}}>TODO List</h1>
        <div className="ui input focus sty">
          <input type="text" placeholder="Add new Tasks"  onChange={this.InputonChange}/>
         </div>
        <button className="ui primary button" onClick={this.ClickonAdd} type={"reset"}>
            Add
        </button>
        </form>
        {this.state.TodoList.map((Todoitem, index) =>  <ToDoItem key={index}  item={Todoitem} delete={()=>this.ClickonDelete(Todoitem.id)}></ToDoItem> )} 
        </div>
    );
  }
}

export default App;