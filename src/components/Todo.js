import { useState } from 'react';
import './todo.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import TodoDateTime from './todoDateTime';



const Todo = () => {

    const [task, setTask] = useState([]);
    const [editIndex , setEditIndex] = useState(null);
    const [editValue , setEditValue] = useState('');
  

    const handleFormSubmit = (inputValue) => { 
        const { content } = inputValue;

        // check if the input field is empty or not
        if (!content){
            toastr.error("Task cannot be empty.")
            return;
        }
         // Check if the task already exists
        if (task.some(curTask => curTask.content === content)) {
            toastr.warning("This task already exists.");
            return;  
        }

        //task add
            setTask((prevTask) => [...prevTask , inputValue]);
            toastr.success("task added successfully.");
        
    };
        //delete a task
        const handleDeleteTodo = (taskId) =>{
            const updateTask = task.filter((curTask) => curTask.id !== taskId);
            setTask(updateTask)
            toastr.success("Task deleted successfully.")
        };

        //check                     
        const handleCheckedTodo = (taskId) => {
            const updatedTask = task.map((curTask) => {
              if (curTask.id === taskId) {
                return { ...curTask, checked: !curTask.checked };
              } else {
                return curTask;
              }
            });
            setTask(updatedTask);
            toastr.success("Task status updated successfully.");
        };

        //edit a task
        const handleEditTodo = (taskId , content) =>{ 
            setEditIndex(task.findIndex(curTask =>curTask.id === taskId))
            setEditValue(content);
        }
        //update                    
        const handleupdatedTodo = ( taskId,updatedValue) => {
            const updatedTask = task.map((curTask) =>
              curTask.id === taskId ? { ...curTask, content: updatedValue } : curTask
            );
            setTask(updatedTask);
            setEditIndex(null);
            toastr.success("Task updated successfully.");
        };
        



    return (
        <section className='todo-container'>
            <header>
                <h1>ToDo List</h1>
                <TodoDateTime />
            </header> 
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className='myunordtist'>
                <ul>
                {task.map((curTask) => {
                    return(
                        <TodoList   key={curTask.id}
                                    taskId={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo = {handleDeleteTodo}
                                    onHandleCheckedTodo={handleCheckedTodo}
                                    onHandleEditTodo={handleEditTodo}
                                    onHandleUpdateTodo={handleupdatedTodo}
                        />
                    )
                })}
                </ul>
   
            </section>
        </section>
    );
};

export default Todo;
