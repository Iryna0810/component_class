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
  toggleCompeted = todoIid => {
    console.log(todoIid);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoIid) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       };
    //     }
    //     return todo;
    //   })
    // })

    // )

    this.setState(({ todos }) => ({
      todos: todos.map(
        todo => todo.id === todoIid ? { ...todo, completed: !todo.cpmpleted } : todo,
      ),
    }));
  };
  

      handleDelete = (todoIid) => {       
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoIid),
        })
            
        
    )
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
          onDeleteToDo={this.handleDelete}
          onHandleCompleted={this.toggleCompeted}
          todos = {todos}
        />
    </div>
  );  
  }
  };
