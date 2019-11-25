import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {   
    getStyle = () => {
        return{            
            textDecoration : this.props.todo.completed ? 'line-through' : 'none',            
        }        
    } 
       
    render(){
        const {title,id} = this.props.todo;
        const {markDone,deleteTodo} = this.props;
      return(
        <div style={todoStyle}>
            <p style={this.getStyle()}>
                <input type="checkbox" onChange={markDone.bind(this,id)} /> {' '}            
                {title}
            </p>            
            <button style={btnStyle} onClick={deleteTodo.bind(this,id)}>x</button>
        </div>
      );
    }  
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    markDone : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired,
}

const btnStyle ={    
    backgroundColor : '#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right',   
}
const todoStyle ={
    display : 'flex',            
    alignItems:'center',     
    justifyContent:'space-between',       
    backgroundColor:'#fcf36d',
    width : '98%',
    height : '30px', 
    margin : '2px' ,    
    padding:'2px' 
}


export default TodoItem;
