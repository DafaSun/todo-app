import styles from './NewTaskContainer.module.css';
import {useState} from "react";
import { Check, Pencil} from "lucide-react";
import {addNewTask} from "../../services/addNewTask.ts";

interface NewTaskContainerProps {
    title: string;
    setUpdate: (a: string) => void;
}

export default function NewTaskContainer({ title, setUpdate }: NewTaskContainerProps) {
    const [text, setText] = useState<string>('');

    const handleSubmit = async () => {
        if (text!='') {
            setUpdate('addNewTask' + new Date().toString());
            addNewTask(text);
            setText('');
        }
    };

    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>
                <Pencil size={20}/>
                <div className={styles.text}>
                    {title}
                </div>
            </div>

            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter a new task"
            />

            <button className={styles.save}  aria-label="Add task" onClick={handleSubmit}>
                <Check size={30} strokeWidth={3}/>
            </button>

        </div>
    );
}
