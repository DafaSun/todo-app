import styles from './ListTasksContainer.module.css';
import TaskItem from "./TaskItem/TaskItem";
import type {Task} from "../../types/Task.ts";

interface ListTasksContainerProps {
    tasks: Task[];
    setUpdate: (a: string) => void;
}

export default function ListTasksContainer({ tasks , setUpdate}: ListTasksContainerProps) {
    return (
        <div className={styles.tasksContainer}>
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} setUpdate={setUpdate} />
            ))}
        </div>
    );
}
