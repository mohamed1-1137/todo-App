import { Component } from 'react';
import './App.css';
import Listitem from "./components/Listitem/Listitem"
import AddItem from "./components/Additem/Additem"

class App extends Component{
  state={
    items:[
      {id:1, name:"Mohamed",age:24},
      {id:2, name:"Ahmed",age:26},
      {id:3, name:"Moaz",age:16}
    ]
  }

  deleteItem=(id)=>{
    // let items=this.state.items;
    // let i =items.findIndex(item=> item.id === id)
    // items.splice(i,1)
    // this.setState({items:items})
    let items=this.state.items.filter(item=>{
      return item.id !== id
    })
    this.setState({items:items})
  }

  addItem=(item)=>{
    item.id=Math.random()*100
    let items=this.state.items
    items.push(item)
    this.setState({items:items})
  }
  render(){
    return (
    <div className="App container">
      <h1 className="text-center">Todo List</h1>
      <Listitem items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem addItem={this.addItem}/>
    </div>
      );
    }
}

export default App;
