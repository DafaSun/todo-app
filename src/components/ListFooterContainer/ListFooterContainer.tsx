import styles from './ListFooterContainer.module.css';
import {loadTasks} from "../../services/loadTasks";
import {deleteTask} from "../../services/deleteTask";

interface ListFooterContainerProps {
    itemsNumber: number | string;
    listType: string;
    setListType: (a: string) => void;
    setUpdate: (a: string) => void;
}

export default function ListFooterContainer({
                                                itemsNumber, listType, setListType, setUpdate
                                            }: ListFooterContainerProps) {
    async function onClick() {
        const loadedTasks = await loadTasks();
        const ft = loadedTasks.filter(task => {
            return task.completed;
        });
        ft.map((task) => {
            deleteTask(task.id)
        })
        setUpdate('deleteCompleted' + new Date().toString())
    }

    return (
        <div className={styles.footer}>
            <div className={styles.leftItems}>{itemsNumber} items left</div>
            <button className={listType == 'all' ? styles.activeBtn : styles.notActiveBtn}
                    onClick={() => {
                        setListType('all')
                    }}
            >All
            </button>
            <button className={listType == 'active' ? styles.activeBtn : styles.notActiveBtn}
                    onClick={() => {
                        setListType('active')
                    }}
            >Active
            </button>
            <button className={listType == 'completed' ? styles.activeBtn : styles.notActiveBtn}
                    onClick={() => {
                        setListType('completed')
                    }}
            >Completed
            </button>

            <button className={styles.clearBtn} onClick={onClick}>Clear completed</button>
        </div>
    );
}
