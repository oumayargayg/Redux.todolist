import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JSredux/Actions/listTask'
import './AddTask.css'


const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch =  useDispatch()

    const handleAdd = (e) => {
        e.preventDefault()
        if (text) {
            dispatch(addTask({id: Math.random(), text, isDone:false}))
            setText("")
        } else {
            alert('Cannot add an empty text !! ')
        }
    }
    return (
        <div>
            <Form onSubmit={handleAdd} className="add-task-container">
                <Form.Control
                className='input-task'
                type="text" placeholder="Enter your new task..." 
                onChange={(e) => setText(e.target.value)} value={text}
                />
                <Button variant="light" type="submit" onClick={handleAdd} > <div className='addme' > Add </div>  </Button>
                </Form>
        </div>
    )
}

export default AddTask