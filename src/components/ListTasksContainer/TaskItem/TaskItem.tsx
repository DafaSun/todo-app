import styles from './TaskItem.module.css';
import {CheckCircle, Circle} from "lucide-react";
import type {Task} from "../../../types/Task.ts";

interface TaskItemProps {
    task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
    function onClick() {
        task.completed=!task.completed;
    }

    return (
        <div className={styles.task}>
            <CheckCircle className={task.completed?'':styles.hidden} onClick={onClick}/>
            <Circle className={task.completed?styles.hidden:''} onClick={onClick}/>
            <span className={styles.text}>{task.name}</span>
        </div>
    );
}
