import styles from './ToDoComponent.module.css';
import ListHeaderContainer from "../ListHeaderContainer/ListHeaderContainer.tsx";
import ListTasksContainer from "../ListTasksContainer/ListTasksContainer.tsx";

import {useEffect} from "react";
import ListFooterContainer from "../ListFooterContainer/ListFooterContainer.tsx";
import {useTasks} from "../../hooks/useTasks.ts";
import NewTaskContainer from "../NewTaskContainer/NewTaskContainer.tsx";

export default function ListContainer() {
    const { tasks, loading, error, add, remove, toggle } = useTasks();
    console.log(tasks);

    useEffect(() => {
        console.log("AAAAAAAAAAAAAAAAAAa----AAAAAAAAAAAAAAAA-AAAAAAAa--AAAAAAa!!!!!!!!!!!!");
    }, [tasks]);

    return (
        <div className={styles.toDo}>
            <div className={styles.title}>
                todos
            </div>

            <NewTaskContainer/>
            <div className={styles.contentContainer}>
                <ListHeaderContainer title={'What needs to be done?'}/>
                <ListTasksContainer tasks={tasks}/>
                <ListFooterContainer leftItemsNumber={2}/>

            </div>

        </div>
    );
}
