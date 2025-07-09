import { useEffect, useState } from "react";
import {
    fetchTasks,
    addTask,
    deleteTask,
    toggleTaskCompleted,
} from "../services/firestoreService";
import type { Task } from "../types/Task";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadTasks = async () => {
        setLoading(true);
        try {
            const data = await fetchTasks();
            setTasks(data);
        } catch (err) {
            setError("Ошибка загрузки задач");
        } finally {
            setLoading(false);
        }
    };

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

    return {
        tasks: tasks,
        loading,
        error,
        add: handleAdd,
        remove: handleDelete,
        toggle: handleToggle,
    };
};
