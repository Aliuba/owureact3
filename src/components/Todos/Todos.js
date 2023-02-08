import {useEffect, useState} from "react";
import {todosService} from "../../services";
import Todo from "../Todo/Todo";


const Todos = () => {
    const [todos, setTodos]=useState([])

    useEffect(()=>{
        todosService.getAll().then(({data})=>setTodos(data))
    },[])


    return (
        <div>
            <h1>TODOS</h1>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;