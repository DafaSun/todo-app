import {addTask_} from "./firestoreService.ts";

export const addNewTask = async (name: string) => {
    await addTask_(name);
};