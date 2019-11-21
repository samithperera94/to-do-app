import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos:[{id:1,description:"dinner at 7PM",status:"undone",},
      {id:2,description:"test 2",status:"undone",},
      {id:3,description:"test 3",status:"undone",}]
  }
  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} />  
      </div>
    );
  }  
}

export default App;
