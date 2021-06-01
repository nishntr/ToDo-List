import axios from "axios";
import { GetTasks, DeleteTask, AddTask } from "./types";

export const getTasks = () => dispatch => {
    axios.get('/api/')
        .then(res => {
            console.log(res.data);
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