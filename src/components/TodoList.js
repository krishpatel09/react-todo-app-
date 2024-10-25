import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import TodoEditPanel from './TodoEditPanel'; 

const TodoList = ({
  taskId,
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
 
  onHandleUpdateTodo
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = (updatedValue) => {
    onHandleUpdateTodo( taskId ,updatedValue); //pass
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {!isEditing ? (
        <>
          <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
          <div className="todo-buttons">
            <button
              className="check-btn"
              onClick={() => onHandleCheckedTodo(taskId)}
            >
              <IoMdCheckmarkCircleOutline />
            </button>
            <button
              className="delete-btn"
              onClick={() => onHandleDeleteTodo(taskId)}
            >
              <MdDeleteForever />
            </button>
            <button
              className="edit-btn"
              onClick={handleEditClick}
            >
              <CiEdit />
            </button>
          </div>
        </>
      ) : (
        <TodoEditPanel
          isOpen={isEditing}
          data={data} 
          onUpdate={handleUpdateClick}  // this is update function
          onCancel={handleCancelClick}  //this is cancel function
          editValue={data} 
        />
      )}
    </li>
  );
};

export default TodoList;
