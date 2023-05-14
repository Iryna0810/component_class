import styled from 'styled-components';
import { Button, List } from 'components/styled';
import { Component } from 'react';

export class ToDoList extends Component {
    // ({ todos }) =>
  

    state = {
        agreed: false,
    }

    handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
        console.log(evt);
        this.setState({
            [name]: type === "checkbox" ? checked : value,
            // [name]: disabled === { agreed },
        
        });
    };


    
    render() {
        const { todos, onDeleteToDo } = this.props;

            return(
        <List>
        {todos.map(({ id, text, agreed }) => (
            <li className='' key={id}>
            
            <p>{text}</p>

                <input
                    type="checkbox"
                    name='checkbox'
                    checked={agreed}
                    onClick={this.handleChange} />
           
        <Button type="button" onClick={() => onDeleteToDo(id)}>Delete</Button>
    
            </li>
            ))
        }
            </List>
            )}
    }
    
