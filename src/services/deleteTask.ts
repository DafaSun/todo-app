import {deleteTask_} from "./firestoreService.ts";

export const deleteTask = async (id: string) => {
    await deleteTask_(id);
};