import React from 'react';
import Form from './form';
import Tasks from './tasks';


export default function dashboard() {
    return (
        <div className="p-3">
            <Tasks />
            <Form />
        </div>
    )
}

