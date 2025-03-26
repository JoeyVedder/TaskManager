import { useState } from 'react';
import { Task } from '../interfaces/Task';
import { v4 as uuidv4 } from 'uuid';

interface TaskFormProps {
    onAddTask : (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // add speech recognition feature 
    // const [listening, setListening] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTask: Task = {
            id: uuidv4(),
            title,
            description,
            completed: false,
        };

        onAddTask(newTask);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add a New Task</button>
        </form>
    );
};

export default TaskForm;