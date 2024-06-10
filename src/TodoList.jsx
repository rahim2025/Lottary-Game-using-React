import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList () {
    let [todo,setTodo] = useState([{task:"sample task",time:"1am",id:uuidv4(),isDone:false}])
    let [formData,setFormData] = useState({task:"",time:"",id:"",isDone:false});
    let inputHandler = (event)=>{
        let fieldname = event.target.name ;
        let fieldvalue = event.target.value ; 
        setFormData( (todo)=>{
            todo[fieldname] = fieldvalue ;
            return {...todo}        
        });
        };
    
    let handleSubmit = (event)=>{
        event.preventDefault();
        setTodo((prevTodo)=>{
            return[...prevTodo,{task:formData.task,time:formData.time,id: uuidv4(), isDone:false }]
        }

        )
        setFormData(
            {task:"",time:"",id:"",isDone:false})
        console.log(todo);
    }
    let markDone = (id)=>{
        setTodo((prevTodo)=>
            prevTodo.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isDone:true};
                }
                else{
                    return todo ;
                }
            })
        )
    }
    let taskDelete = (id)=>{
        setTodo((prevTodo)=>todo.filter((prevTodo)=> prevTodo.id != id ))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="task">Task:</label>
                <input type="text" id="task" placeholder="enter your task" name="task" 
                value={formData.task} onChange={inputHandler} />

                <label htmlFor="time">Starting Time:</label>
                <input type="text" id="task" placeholder="Estimate time" name="time" 
                value={formData.time} onChange={inputHandler} />

                <button type="submit">Add task</button>
            </form>
            <h3>Pending Task</h3>
            <hr />
            <ul>
                {todo.map((todos)=>(
                    <li key={todos.id}> <span style={todos.isDone ? 
                        {textDecorationLine:"line-through"} : {}  } >{todos.task} at:{todos.time}</span>
                    <button onClick={()=>{markDone(todos.id)}} >Done</button>
                    <button onClick={()=>{taskDelete(todos.id)}} >Delete</button>  
                    </li>    
                )

                )}
            </ul>
            
            
        </div>
    )
}