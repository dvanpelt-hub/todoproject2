import React from 'react';
import TodoOne from './TodoOne';
import TodoTwo from './TodoTwo';
import './TodoMaster.css';

class TodoMaster extends React.Component {

  state={
    inputTextOne: "",
    inputTextTwo: "",
    todoListOne: [],
    todoListTwo: []
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleClick = (event) => {
    event.preventDefault();

    (event.target.name === "buttonOne") ?
        this.setState({
          todoListOne: this.state.todoListOne.concat(this.state.inputTextOne)
        })
      :
        this.setState({
          todoListTwo: this.state.todoListTwo.concat(this.state.inputTextTwo)
        })
  }

  render() {

    const listOne = this.state.todoListOne;
    const listTwo = this.state.todoListTwo;

    return(
      <div className="todoForm">

        <div className="headers">
          <h1 className="headerOne">
            To-Do List One
          </h1>

          <h1 className="headerOne">
            To-Do List Two
          </h1>
        </div>

        <div className="todoLists">
          <TodoOne
            inputTextOne={this.state.inputTextOne}
            todoListOne={this.todoListOne}
            listOne={listOne}
            listTwo={listTwo}
          />
          <TodoTwo
            inputTextTwo={this.inputTextTwo}
            todoListTwo={this.todoListTwo}
            listOne={listOne}
            listTwo={listTwo}
          />
        </div>

        <div className="inputFields">
          <input
            type="text"
            id="input1"
            name="inputTextOne"
            value={this.state.inputTextOne}
            onChange={this.handleChange}
            className="inputOne"
            placeholder="Add 'to-do'"
            />
          <input
            type="text"
            id="input2"
            name="inputTextTwo"
            value={this.state.inputTextTwo}
            onChange={this.handleChange}
            className="inputTwo"
            placeholder="Add 'to-do'"
            />
        </div>
        
        <div className="buttons">
          <button name="buttonOne" onClick={this.handleClick}>Add To-do</button>
          <button name="buttonTwo" onClick={this.handleClick}>Add To-do</button>
        </div>

      </div>
    )
  }
};

export default TodoMaster;