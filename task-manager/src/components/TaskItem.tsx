import { Task } from "../interfaces/Task";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
