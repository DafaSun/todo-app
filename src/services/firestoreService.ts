import { db } from "../firebase";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import type {Task} from "../types/Task.ts";

const tasksRef = collection(db, "todos");

export const fetchTasks = async (): Promise<Task[]> => {
    const snapshot = await getDocs(tasksRef);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, "id">),
    }));
};

export const addTask = async (text: string): Promise<void> => {
    await addDoc(tasksRef, { text, completed: false });
};

export const deleteTask = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, "todos", id));
};

export const toggleTaskCompleted = async (id: string, completed: boolean): Promise<void> => {
    await updateDoc(doc(db, "todos", id), { completed });
};
