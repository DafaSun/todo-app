import styles from './ListTasksContainer.module.css';
import TaskItem from "./TaskItem/TaskItem";
import type {Task} from "../../types/Task.ts";

interface ListTasksContainerProps {
    tasks: Task[];
}

export default function ListTasksContainer({ tasks }: ListTasksContainerProps) {
    return (
        <div className={styles.tasksContainer}>
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} />
            ))}
        </div>
    );
}
