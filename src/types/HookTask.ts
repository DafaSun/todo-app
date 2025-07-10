import type {Task} from "./Task.ts";

export interface HookTask {
    tasks: Task[];
    leftActive:number;
}