import { useState, useEffect } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState('');
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formatDate = now.toLocaleDateString();
      const formatTime = now.toLocaleTimeString();
      setDateTime(`${formatDate} - ${formatTime}`);
    },1000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h2 className='date-time'>{dateTime}</h2>
  );
};

export default TodoDateTime;
