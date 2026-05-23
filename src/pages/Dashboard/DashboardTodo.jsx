import { Button, Col, Form, Input, message, Radio, Row, Space, Typography } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const initialState = { title: "", location: "", dueDate: '', description: "", visibility: "", status: "" }
const DashboardTodo = () => {
    const [loading, setIsLoading] = useState(false)
    const nevigate = useNavigate()
    const { Title } = Typography
    const [todo, setTodo] = useState(initialState)

    const handleChange = e => setTodo({ ...todo, [e.target.name]: e.target.value })

    const handleSubmit = () => {
        const { title, location, dueDate, description, visibility, status } = todo
        const todos = JSON.parse(localStorage.getItem('todos')) || []
        todo.createdBy = JSON.parse(localStorage.getItem('user')).fullName
        todo.createdAt = Date.now()
        if (!title || !location || !dueDate || !description || !visibility || !status) { return message.error('Please Fill the Form Completely') }
        setIsLoading(true)


        setTimeout(() => {
            todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(todos))
            setIsLoading(false)
            nevigate('/todos')
        }, 1000);
    }

    return (
        <main>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Title level={2} >Create Todo</Title>
                    </Col>
                </Row>
                <Form layout='vertical'>
                    <Row gutter={8}>
                        <Col span={12}>
                            <Form.Item label='Title' required>
                                <Input type='text' size='large' placeholder='Title' name='title' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Address' required>
                                <Input type='text' size='large' placeholder='Address' name='location' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Due Date' required>
                                <Input type='date' size='large' placeholder='Title' name='dueDate' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <Input.TextArea size='large' placeholder='Description' name='description' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Visibility' required>
                                <Radio.Group id='' size='large' name='visibility' onChange={handleChange}>
                                    <Radio value='private'>Private</Radio>
                                    <Radio value='public'>Public</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Status' required>
                                <Radio.Group id='' size='large' name='status' onChange={handleChange}>
                                    <Radio value='Completed'>Completed</Radio>
                                    <Radio value='InCompleted'>InCompleted</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Button loading={loading} type='primary' size='large' block onClick={handleSubmit}>Add Todo</Button>
                        </Col>

                    </Row>
                </Form>
            </div>
        </main>
    )
}

export default DashboardTodo