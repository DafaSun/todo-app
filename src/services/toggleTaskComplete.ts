import {toggleTaskCompleted_} from "./firestoreService";

export const toggleTaskComplete = async (id: string, completed: boolean) => {
    await toggleTaskCompleted_(id, !completed);
};