import React, { useState } from 'react';
import Form from './form';
import Tasks from './tasks';

// import div from 'react-bootstrap/div';
import { Button } from 'react-bootstrap';
import '../css/dashboard.css';

export default function dashboard() {
    const [add, setAdd] = useState(0);
    return (

        <div className="dash dash-m">
            {
                add === 0 ?
                    < >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button variant="dark" onClick={() => setAdd(1)}>Add</Button>
                        </div>
                        <Tasks />
                    </>
                    :
                    <Form set={setAdd} />
            }
        </div>



    )
}

