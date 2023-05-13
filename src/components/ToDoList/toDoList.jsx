import styled from 'styled-components';
import { Button, List } from 'components/styled';

export const ToDoList = ({ todos }) =>
    <List>
        {todos.map(({ id, text, completed }) => (
            <li className='' key={id}>
            
            <p>{text}</p>

            <input type="checkbox" checked={completed}/>
           
        <Button type="button">Delete</Button>
    
            </li>
            ))
        }
    </List>