import type { Task } from "../types/Task";

export function filterTasks(tasks: Task[], filter: string): Task[] {
    switch (filter) {
        case "active":
            return tasks.filter(task => !task.completed);
        case "completed":
            return tasks.filter(task => task.completed);
        case "all":
        default:
            return tasks;
    }
}
