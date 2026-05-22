import { Button, Col, Form, Input, message, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/Auth'

const initialState = { email: '', password: ''}

const Login = () => {
  const {dispatch} = useAuth()
  const { Item } = Form
  const { Title } = Typography
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const nevigate = useNavigate()
  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

  const handleLogin = () => {
    const {  email, password} = state
    setLoading(true)
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find((user, i) => user.email === state.email && user.password === state.password)

    if (!user) {
      setLoading(false)
      return message.error('Invailid email or Password ')
    }

    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify(user))
      setLoading(false)
      dispatch({isAuth:true , user})
      nevigate('/')
      message.success('Login Successful')
      
    }, 1000);
  }

  return (
    <>
      <main className="auth d-flex justify-content-center p-2 p-lg-0 align-items-center bg-primary">
        <div className="card p-2 p-lg-3 ">
          <Row>
            <Col span={24}>
              <Title level={1}>Login</Title>
            </Col>

          </Row>
          <Form layout='vertical'>
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
              <Button type='primary' size='large' htmlType='submit' block onClick={handleLogin} loading={loading}>Login</Button>
            </Col>
          </Form>
        </div>
      </main>
    </>
  )
}

export default Login