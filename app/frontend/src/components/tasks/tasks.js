import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getTasks, deleteTask, updateTask } from "../../actions/tasks";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Tasks(props) {


    Tasks.propTypes = {
        tasks: PropTypes.array.isRequired,
        getTasks: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
        updateTask: PropTypes.func.isRequired,
    };
    useEffect(() => {
        props.getTasks()
    }, [])

    const handleChange = (value, task, name) => {
        console.log(task);
        task[name] = value;
        props.updateTask(task);

    }

    return (
        <div >
            <Table striped variant="dark" borderless hover
                style={{ border: "1px solid", marginTop: "30px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}>
                <thead style={{ fontFamily: "Lucida Console" }}>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created</th>
                        <th></th>
                    </tr>

                </thead>
                <tbody style={{ fontFamily: "monospace" }}>
                    {props.tasks.map(task => (
                        <tr key={task.id}>

                            <td
                                onBlur={(e) => handleChange(e.currentTarget.textContent, task, "title")}
                                suppressContentEditableWarning={true}
                                contentEditable="true" spellCheck={false}
                                style={{ width: "20%" }}>
                                {task.title}
                            </td>

                            <td
                                onBlur={(e) => handleChange(e.currentTarget.textContent, task, "description")}
                                suppressContentEditableWarning={true}
                                contentEditable="true" spellCheck={false}
                                suppressContentEditableWarning={true}
                                style={{ width: "51%" }}>
                                {task.description}
                            </td>

                            <td>{task.created.slice(0, 10)}</td>

                            <td >
                                <Button size="sm" variant="danger" onClick={() => props.deleteTask(task.id)} >{delIcon()}</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    )
}





const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
})


export default connect(mapStateToProps, { getTasks, deleteTask, updateTask })(Tasks);


function delIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
    )
}
