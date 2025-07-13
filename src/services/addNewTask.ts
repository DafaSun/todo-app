import {addTask_} from "./firestoreService";

export const addNewTask = async (name: string) => {
    await addTask_(name);
};