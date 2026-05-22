import { Button, Col, Form, Input, message, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = { fullName: '', email: '', password: '', confirmPassword: '' }

const Register = () => {
  const { Item } = Form
  const { Title } = Typography
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const nevigate = useNavigate()
  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    const { fullName, email, password, confirmPassword } = state
    if (fullName.trim().length < 3) { return message.error('Please Enter Your Full Name'); }
    if (!window.isValidEmail(email)) { return message.error('Please enter a valid email address'); }
    if (password.length < 6) { return message.error('Password must be at least 6 characters'); }
    if (password !== confirmPassword) { return message.error('Passwords do not match'); }
    setLoading(true)
    const users = JSON.parse(localStorage.getItem('users')) || []
    const isUser = users.find((user, i) => user.email === email)

    if (isUser) {
      setLoading(false)
      return message.error('User exist')
    }

    setTimeout(() => {
      users.push(state)
      localStorage.setItem('users', JSON.stringify(users))
      setLoading(false)
      
      nevigate('/auth/login')
      message.success('User Registered')
      
    }, 1000);
  }

  return (
    <>
      <main className="auth d-flex justify-content-center p-2 p-lg-0 align-items-center bg-primary">
        <div className="card p-2 p-lg-3 ">
          <Row>
            <Col span={24}>
              <Title level={1}>Register</Title>
            </Col>

          </Row>
          <Form layout='vertical'>
            <Col span={24}>
              <Item label='Full Name' required>
                <Input type='text' size='large' placeholder='Full Name' name='fullName' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={24}>
              <Item label='Email' required>
                <Input type='email' size='large' placeholder='Enter Your Email' name='email' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={24}>
              <Item label='Password' required>
                <Input.Password size='large' placeholder='Create a Strong Password' name='password' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={24}>
              <Item label='Confirm Password' required>
                <Input.Password size='large' placeholder='Confirm Your Password' name='confirmPassword' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={24}>
              <Button type='primary' size='large' htmlType='submit' block onClick={handleSubmit} loading={loading}>Submit</Button>
            </Col>
          </Form>
        </div>
      </main>
    </>
  )
}

export default Register