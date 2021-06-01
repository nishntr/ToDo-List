import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getTasks, deleteTask } from "../../actions/tasks";

function Tasks(props) {
    Tasks.propTypes = {
        tasks: PropTypes.array.isRequired,
        getTasks: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
    };
    useEffect(() => {
        props.getTasks()

    }, [])

    return (
        <React.Fragment>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created</th>
                    </tr>

                </thead>
                <tbody>
                    {props.tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.created.slice(0, 10)}</td>
                            <td>
                                <button onClick={() => props.deleteTask(task.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}



const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
})


export default connect(mapStateToProps, { getTasks, deleteTask })(Tasks);




// class Tasks extends Component {
//     static propTypes = {
//         tasks: PropTypes.array.isRequired,
//         getTasks: PropTypes.func.isRequired,
//     };
//     componentDidMount() {
//         this.props.getTasks();
//     }
//     render() {
//         return (
//             <div>
//                 Task
//             </div>
//         )
//     }
// }