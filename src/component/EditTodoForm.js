import React,{useState} from 'react' //rafc

export const EditTodoForm = ({editTodo,task}) => {
    const[value, setValue]=useState(task.task)

    const handleSubmit = e => { {/*function that caputures the input value*/}
        e.preventDefault(); {/*avoids refresh on submitting*/}

       editTodo(value,task.id);

       setValue("");
    }
  return (
    <form className='TodoForm Edit' onSubmit={handleSubmit}> {/*event to capture the value*/}
        <input type= "text"  className= 'todo-input' value={value}placeholder="Update task?!" onChange={e => setValue/*to save it in the state*/(e.target.value)}/> {/*for user input*/}
        <button type="submit" className='todo-btn ebtn'>Update Task</button>
    </form>
  )
}
