import { useState } from 'react';
import './App.css';
import AppName from './Components/AppName';
import TodoInput from './Components/TodoInput';
import TodoItems from './Components/TodoItems';
import WelcomeMessage from './Components/WelcomeMessage';

function App() {
 

  

const [todoitems,setTodoitems] =  useState([]);
const handleNewItem = (itemName,itemDueDate) => {
 
  const newTodoItems =[...todoitems,{ productName :itemName,
  productDate :itemDueDate}];
  setTodoitems(newTodoItems);
};

const handleDeleteItem  = (todoItemName) => {
  const newTodoItems =todoitems.filter(item => item.productName !== todoItemName);
  setTodoitems(newTodoItems);
  
}
  return (
    <div>
      <AppName/>
      <TodoInput onNewItem={handleNewItem}/>
      {todoitems.length === 0 && <WelcomeMessage/>}
      {todoitems.map(item => <TodoItems productName={item.productName} productDate={item.productDate} onClickDelete={handleDeleteItem}  key={item.productName}/>)}
      
      
    </div>
  );
}

export default App;
