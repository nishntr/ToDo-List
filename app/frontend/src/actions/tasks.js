import axios from "axios";
import { GetTasks, DeleteTask, AddTask, UpdateTask } from "./types";

export const getTasks = () => dispatch => {
    axios.get('/api/')
        .then(res => {
            dispatch({
                type: GetTasks,
                payload: res.data
            });
        }
        ).catch(err => console.log(err));
}

export const addTask = (task) => dispatch => {
    axios.post('/api/', task)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: AddTask,
                payload: res.data
            });
        }
        ).catch(err => console.log(err));
}


export const deleteTask = (id) => dispatch => {
    axios.delete(`/api/${id}`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: DeleteTask,
                payload: id
            });
        }
        ).catch(err => console.log(err));
}


export const updateTask = (task) => dispatch => {
    axios.put(`/api/${task.id}/`, task)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: UpdateTask,
                payload: res.data
            });
        }
        ).catch(err => console.log(err));
}