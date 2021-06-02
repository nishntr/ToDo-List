import { GetTasks, DeleteTask, AddTask, UpdateTask } from "../actions/types.js";

const initialState = {
    tasks: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GetTasks:
            return {
                ...state,
                tasks: action.payload
            };
        case AddTask:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case DeleteTask:

            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case UpdateTask:
            let i = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks[i] = action.payload;
            return {
                ...state,
                tasks: state.tasks

            }
        default:
            return state;
    }
}