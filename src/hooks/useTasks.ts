import {useEffect, useState} from "react";
import {
    fetchTasks,
    addTask,
    deleteTask,
    toggleTaskCompleted,
} from "../services/firestoreService";
import type {Task} from "../types/Task";
import type {HookTask} from "../types/HookTask";

export const useTasks = (update:string) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const loadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data);
    };

    useEffect(() => {
        loadTasks();
    }, [update]);

    const handleAdd = async (text: string) => {
        await addTask(text);
        await loadTasks();
    };

    const handleDelete = async (id: string) => {
        await deleteTask(id);
        await loadTasks();
    };

    const handleToggle = async (id: string, completed: boolean) => {
        await toggleTaskCompleted(id, !completed);
        await loadTasks();
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const leftActive = tasks.filter(task => !task.completed).length;

    const hookTask: HookTask = {
        tasks: tasks,
        leftActive: leftActive
    }

    return {
        hookTask
    };
};
