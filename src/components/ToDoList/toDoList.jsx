import styled from 'styled-components';
import { Button, List } from 'components/styled';
import { Component } from 'react';

export class ToDoList extends Component {
    // ({ todos }) =>
  

    state = {
        agreed: false,
    }

    handleChange = evt => {
    // const { todos } = this.props;
    const { name, value, type, checked } = evt.target;
    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
        console.log(evt.target.value);
        this.setState({
            [name]: type === "checkbox" ? checked : value,
            agreed: checked,
        })
    }
    


    
    render() {
        const { todos, onDeleteToDo, onHandleCompleted } = this.props;
        const { agreed } = this.state;

        return (
            <>
                <div>
                    Total todo: {todos.length}
                </div>
        <List>
        {todos.map(({ id, text, completed }) => (
            <li className='' key={id}>
            
            <p>{text}</p>

                <input
                    type="checkbox"
                    // name='checkbox'
                    checked={completed}
                    // value={id}
                    onChange={() => (onHandleCompleted(id))} />
           
        <Button type="button" disabled={!completed} onClick={() => onDeleteToDo(id)}>Delete</Button>
    
            </li>
            ))
        }
                </List>
                </>
            )}
    }
    
