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
      var loading = document.getElementById('loading');
      loading.setAttribute("class", "spinner-border text-primary");
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodo(data);
      loading.setAttribute("class", "");
    }
  
    return <div>
            <Button/>
            <Table todos={todos}/>
            <Modal/>
            </div>
}