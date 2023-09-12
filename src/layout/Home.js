import Modal from "../component/modal"
import Button from "../component/button"
import Table from "../component/table";
import { useState } from "react";
import { useEffect } from "react";

export default function Home(){
    const [todos, setTodo] = useState([]);

    useEffect(() => {
      fetchData();
      console.log('load data')
    }, [])
  
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodo(data);
    }
  
    return <div>
            <Button/>
            <Table todos={todos}/>
            <Modal/>
            </div>
}