import styles from './TaskItem.module.css';
import {CheckCircle, Circle, Delete} from "lucide-react";
import type {Task} from "../../../types/Task.ts";
import {toggleTaskComplete} from "../../../services/toggleTaskComplete";
import {deleteTask} from "../../../services/deleteTask";

interface TaskItemProps {
    task: Task;
    setUpdate: (a: string) => void;
}

export default function TaskItem({ task , setUpdate }: TaskItemProps) {
    function onClickToggleCompleted() {
        toggleTaskComplete(task.id, task.completed);
        setUpdate('toggleCompleted'+new Date().toString())
    }

    function onClickDelete() {
        deleteTask(task.id);
        setUpdate('toggleCompleted'+new Date().toString())
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskCompleted}  onClick={onClickToggleCompleted}>
            <CheckCircle className={task.completed?'':styles.hidden} />
            <Circle className={task.completed?styles.hidden:''} />
            <span className={styles.text}>{task.name}</span>

            </div>
            <button className={styles.deleteTask} onClick={onClickDelete} aria-label={"delete "+task.name} title={"delete "+task.name}>
                <Delete size={25}/>
            </button>
        </div>
    );
}
