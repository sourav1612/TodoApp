import React, { useState } from "react";
import "./App.css";
import ToDoLists from './ToDoLists'

const App = () => {
  const [inputlist, setinputlist] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };

  const deleteItems = (id) => {
    console.log('deleted');
    setItems((olditems) => {
        return olditems.filter((arrElem,index) =>{
            return index !== id;
        })
    })
}

 


  const listOfItems = (event) => {
    setItems((olditems) => {
      return [...olditems, inputlist];
    });
    setinputlist("");
  };

  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> To Do List</h1>
          <br />
          <input
            value={inputlist}
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {Items.map((itemval,index) => {
            return <ToDoLists text = {itemval} key = {index} id= {index} onSelect={deleteItems}/>
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
