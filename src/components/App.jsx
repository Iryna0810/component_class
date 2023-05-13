import {nanoid} from "nanoid";
import { Component } from "react";
import { ToDoList } from "./ToDoList/toDoList";

export class App extends Component {
  state = {
    todos: [
      { id: nanoid(), text: 'Styde React Basic', completed: false },
      { id: nanoid(), text: 'Discover React Router', completed: false },
      { id: nanoid(), text: 'Survive a Redux', completed: false }
    ]
}
  
  render() {
    const { todos } = this.state;
    
    return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <h1>State Component</h1>
        <ToDoList
        todos = {todos}
        />
    </div>
  );  
  }
  
};
