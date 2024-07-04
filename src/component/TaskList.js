// src/components/TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../features/tasks/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [newTask, setNewTask] = useState('');

  const handleEdit = (id, text) => {
    setIsEditing(id);
    setNewTask(text);
  };

  const handleSave = (id) => {
    dispatch(editTask({ id, text: newTask }));
    setIsEditing(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {isEditing === task.id ? (
            <>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              {task.text}
              <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
              <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
