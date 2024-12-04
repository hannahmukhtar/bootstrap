import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch({ type: 'ADD_TASK', payload: task });
    setTask('');
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
