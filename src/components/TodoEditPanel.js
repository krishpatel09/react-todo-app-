import { useState , useEffect } from 'react';
import { RxUpdate } from 'react-icons/rx';
import { MdCancel } from 'react-icons/md';



const TodoEditPanel = ({ isOpen, data, onUpdate, onCancel , editValue }) => {
  const [isUpdate, setIsUpdate] = useState(editValue);


useEffect(() =>{
  setIsUpdate(editValue); 
},[editValue]);

  const handleCancel = () => {
    onCancel();
    setIsUpdate(data); 
  };

  const handleUpdate = () => {
    onUpdate(isUpdate); 
    return;
  };

  

  return (
    <div className={`edit-panel ${isOpen ? 'open' : ''}`}>
      <input
        type="text"
        value={isUpdate}
        onChange={(e) => setIsUpdate(e.target.value)}
        placeholder="Update your task"
      />
      <div className="panel-buttons">
        <button className="update-btn" onClick={handleUpdate}>
          <RxUpdate /> Update
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          <MdCancel /> Cancel
        </button>
      </div>
    </div>
  );
};

export default TodoEditPanel;
