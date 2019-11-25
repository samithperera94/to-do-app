import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component { 
    
    renderTodos = () => {
        return this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} markDone={this.props.markDone} deleteTodo={this.props.deleteTodo} />
          ));
    }

    render(){
        return(
            <div style={mainLayout}>
                <this.renderTodos/>
            </div>
        );      
    }  
}

Todos.propTypes = {
      todos : PropTypes.array.isRequired,
      markDone : PropTypes.func.isRequired,
      deleteTodo : PropTypes.func.isRequired
}

const mainLayout = {
    display: 'flex',
    alignItems:'center',     
    flexDirection:'column',
    width : '40%',
    height : '400px',
    backgroundColor:'#c9c2ad',    
}

export default Todos;
