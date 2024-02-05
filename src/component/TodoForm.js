import React,{useState} from 'react' //rafc

export const TodoForm = ({addTodo}) => {
    const[value, setValue]=useState("")
    const isAnonymous=false;

    const handleSubmit = e => { {/*function that caputures the input value*/}
        e.preventDefault(); {/*avoids refresh on submitting*/}

       addTodo(value);

       setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}> {/*event to capture the value*/}
        <input type= "text"  className= 'todo-input' value={value}placeholder="Today's task?!" onChange={e => setValue/*to save it in the state*/(e.target.value)}/> {/*for user input*/}
        <button type="submit" className='todo-btn' disabled={!value}>Add Task</button>
    </form>
    
  )
}
