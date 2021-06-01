import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addTask } from '../../actions/tasks';
import Button from 'react-bootstrap/Button';

function Form(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    Form.propTypes = {
        addTask: PropTypes.func.isRequired,
        set: PropTypes.func.isRequired
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, description };
        props.addTask(task);
        props.set(0);

        setTitle('');
        setDescription('');

    }

    return (
        <div className="card card-body mt-4 mb-4" style={{ marginTop: "10px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <div className="form-group">

                    <Button type="submit" style={{ marginRight: "16px" }} variant="primary">Add </Button>

                    <Button variant="outline-secondary" onClick={() => { props.set(0) }}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}


export default connect(null, { addTask })(Form);