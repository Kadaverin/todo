import React, {Component} from 'react';
import { connect } from 'react-redux';
import	{	bindActionCreators	}	from	'redux'
import Header from './Header';
import ToDoList from './ToDoList';
import Footer from './Footer';

export default class ToDoPage extends Component{

    render(){
        return(
            <div style = {{marginLeft : '40%'}}>
                <Header/>
                <ToDoList/>            
                <Footer/>
            </div>
        )
    }
}

// Конектить отдельно Header и ToDoList ?  Хеадер - клопка логаута и форма для добавления новой тудушки
// function	mapStateToProps(state)	{
// 		return	{
// 				projects:    state.projects,
//                 tasks:      state.tasks    
// 		}
// }

// function	mapDispatchToProps(dispatch)	{
// 		return	{
				  
// 		}
// }

// export default connect ( mapStateToProps, mapDispatchToProps)(Main)
