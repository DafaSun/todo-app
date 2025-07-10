import type { Task } from "../types/Task";
import {fetchTasks_} from "./firestoreService.ts";

export const loadTasks = async () => {
    const tasks:Task[] = await fetchTasks_();
    return tasks;
};