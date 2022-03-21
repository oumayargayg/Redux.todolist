import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../../JSredux/Actions/listTask';

const Edit = ({task}) => {

    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState(task.text)
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow =() => setShow(true)

    const handleEdit = () => {
        dispatch(editTask(task.id, newTask))
        handleClose()
    }

    return (
        <div>

<Button variant="outline-danger" onClick={handleShow} >
            Edit
        </Button>


    <Modal show={show} onHide={handleClose} >
    <Modal.Header closeButton>
    <Modal.Title> Change the Task. </Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
    </Modal.Body>

    <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose} >
            Close
        </Button>
        <Button variant="danger" onClick={handleEdit} >
            Save changes
            </Button>
    </Modal.Footer>
</Modal>
        </div>
    )
}

export default Edit