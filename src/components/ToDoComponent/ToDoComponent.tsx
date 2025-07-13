import styles from './ToDoComponent.module.css';
import ListHeaderContainer from "../ListHeaderContainer/ListHeaderContainer";
import ListTasksContainer from "../ListTasksContainer/ListTasksContainer";

import ListFooterContainer from "../ListFooterContainer/ListFooterContainer";
import NewTaskContainer from "../NewTaskContainer/NewTaskContainer";
import {useEffect, useState} from "react";
import type {Task} from "../../types/Task";
import {loadTasks} from "../../services/loadTasks";
import Loading from "../Loading/Loading";
import LeftItemsActive from "../LeftItemsActive/LeftItemsActive";
import EmptyList from "../EmptyList/EmptyList";

export default function ListContainer() {
    const [listType, setListType] = useState<string>('all')
    const [update, setUpdate] = useState<string>('')
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [leftActive, setLeftActive] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const loadedTasks = await loadTasks();
            setTasks(loadedTasks);
            setLeftActive(loadedTasks.filter(task => !task.completed).length);

            const ft = loadedTasks.filter(task => {
                if (listType === "active") return !task.completed;
                if (listType === "completed") return task.completed;
                return true;
            });
            setFilteredTasks(ft);
            setLoading(false);
        };
        fetchData();
    }, [update]);

    useEffect(() => {
        const ft = tasks.filter(task => {
            if (listType === "active") return !task.completed;
            if (listType === "completed") return task.completed;
            return true;
        });
        setFilteredTasks(ft);
    }, [listType]);

    return (
        <div className={styles.toDo}>
            <div className={styles.title}>
                todos
            </div>

            <div className={styles.contentContainer}>
                <NewTaskContainer title={'Enter a new task:'} setUpdate={setUpdate}/>
                <ListHeaderContainer title={'What needs to be done?'}/>
                {loading ? (
                        <Loading/>
                    ) :
                    filteredTasks.length == 0 ? (
                        <EmptyList/>
                    ) : (
                        <ListTasksContainer tasks={filteredTasks} setUpdate={setUpdate}/>
                    )}
                <ListFooterContainer itemsNumber={loading ? '...' : filteredTasks.length} listType={listType}
                                     setListType={setListType}
                                     setUpdate={setUpdate}/>
                <LeftItemsActive leftItemsNumber={loading ? '...' : leftActive}/>
            </div>
        </div>
    );
}
