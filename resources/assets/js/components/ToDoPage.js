import React, {Component} from 'react';
import Header from '../containers/Header';
import ToDoList from '../containers/ToDoList';

export default class ToDoPage extends Component{
    render(){
        return(
            <div className = 'todo-main-page'>
                <Header/>
                <ToDoList/>            
            </div>
        )
    }
}

