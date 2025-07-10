import {toggleTaskCompleted_} from "./firestoreService.ts";

export const toggleTaskComplete = async (id: string, completed: boolean) => {
    await toggleTaskCompleted_(id, !completed);
};