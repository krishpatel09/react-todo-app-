import { useState } from "react";

const TodoForm = ({onAddTodo}) =>{
    const [inputValue, setInputValue] = useState({ id: "", content: "", checked: false});

    const HandleInputChange = (value) => {
        const newId = new Date().getTime();
        setInputValue({id:newId , content: value , checked:false}); 
    };
    

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue((prev) => ({...prev , content:""}));
    }

    return(
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        className='todo-input'
                        autoComplete='off'
                        value={inputValue.content}
                        onChange={(e) => HandleInputChange(e.target.value)}                            
                    />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>                
        </section>
    )
}

export default TodoForm;





