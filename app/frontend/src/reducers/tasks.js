import { GetTasks, DeleteTask, AddTask } from "../actions/types.js";

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
            }
        default:
            return state;
    }
}