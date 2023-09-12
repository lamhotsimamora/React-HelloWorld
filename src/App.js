import Table from "./component/table";
import Button from "./component/button";
import Modal from "./component/modal";
import { useEffect, useState } from "react";

function App() {

  const [todos,setTodo] =useState([]);
  
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData= async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setTodo(data);
  }


  return (
    <div className="container">
      <br></br>
      <Button />
      <Table todos={todos}/>
      <Modal />
    </div>
  );
}

export default App;
