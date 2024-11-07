import { useState } from "react"


const Todo = () => {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")

const handleSubmit = () =>{
    setTodo((todo) =>{
       return todo.concat({
  
            text: input,
            id: Math.floor(Math.random() * 10),
        

    });
});
    setInput("");

};

const removeTodo = (id) => setTodo((todo) => todo.filter(t => t.id!== id));



    return (
    <div className="container">
        <input 
        type="text" 
        placeholder="Enter the task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
   
   <button onClick={handleSubmit}>submit</button>

   <ul className="todo.list">
    {todo.map(({text, id}) => (
        <li className="todo" key={id}>{todo.text}
         <span>{text}</span>
         <button className="close" onClick={() => removeTodo(id)}>+</button>
        </li>
    ))} 
   </ul>
    </div>
  )
}

export default Todo
