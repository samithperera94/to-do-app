import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {    
    render(){
      return(
        <p style={itemStyle} >{this.props.todo.description}</p>
      );
    }  
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

const itemStyle = {
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor:'#0f732a',
    width : '200px',
    height : '30px',    
}

export default TodoItem;
