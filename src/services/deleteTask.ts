import {deleteTask_} from "./firestoreService";

export const deleteTask = async (id: string) => {
    await deleteTask_(id);
};