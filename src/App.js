import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

class App extends React.Component {
  state = {
    // todos:[{id:uuid.v4(),title:"dinner at 7PM",completed:false,},
    //   {id:uuid.v4(),title:"test 2",completed:false,},
    //   {id:uuid.v4(),title:"test 3",completed:false,}]
    todos:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos:res.data})) 
  }

  markDone = (id) => {
    console.log("changed",id);
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  deleteTodo = (id) =>{
    console.log("deleted",id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos : [...this.state.todos.filter((todo) => todo.id !== id)]}) )
    // this.setState({ todos : [...this.state.todos.filter((todo) => todo.id !== id)]});
  }

  addTodo = (title) => {
    console.log("add todo",title);
    // const newTodo = {
    //   id : uuid.v4() ,
    //   title : title ,
    //   completed : false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10',{
      title:title,
      completed:false
    }).then(res => this.setState({todos:[...this.state.todos,res.data ]}))
    // this.setState({
    //   todos:[...this.state.todos,newTodo ]
    // });
  }

  render(){
    return (
      <Router>
        <div className="App" style={AppStyle}>
          <Header />
          <Route exact path="/" render={(props) => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markDone={this.markDone} deleteTodo={this.deleteTodo} /> 
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />         
           
        </div>
      </Router>      
    );
  }  
}

const AppStyle = {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',  
  backgroundColor:'#dbdbd9',
  height:'100%'
}

export default App;
