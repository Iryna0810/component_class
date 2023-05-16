import {nanoid} from "nanoid";
import { Component } from "react";
import { ToDoList } from "./ToDoList/toDoList";
import Modal from "./Modal/modal";
import { Button } from "./styled";

export class App extends Component {
  state = {
    todos: [
      { id: nanoid(), text: 'Styde React Basic', completed: false },
      { id: nanoid(), text: 'Discover React Router', completed: false },
      { id: nanoid(), text: 'Survive a Redux', completed: false }
    ],
    showModal: false
  };

    componentDidMount() {
    console.log('App componentDidAmount');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    // if (parsedTodos) {
    //   this.setState({ todos: parsedTodos });

    // }

  }
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('Update state');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
              
    }
      
  }


  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }))
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
    const { todos, showModal } = this.state;
    
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
        
        <Button type="button" onClick={this.toggleModal}>Open Modal</Button>
        
        {showModal && (
          <Modal onClose={this.toggleModal}
          >
        <h3>Title Modal</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti similique voluptas rerum id, ducimus magnam iusto dolores. Laboriosam velit dolores facilis enim repudiandae dicta, aspernatur ex saepe ea repellendus amet!
        </p>
        <Button type="button" onClick={this.toggleModal}>Close Modal</Button>
      </Modal>
        )
        }
        
        <ToDoList
          onDeleteToDo={this.handleDelete}
          onHandleCompleted={this.toggleCompeted}
          todos = {todos}
        />
    </div>
    );
  }
};
  
