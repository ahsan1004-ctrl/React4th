import { Col, Row, Typography } from 'antd'


const { Title } = Typography

const Home = () => {
  return (
    <main>
      <div className="container">
        <Row>
          <Col span={24}>
            <Title level={1}>Home</Title>
          </Col>
          <Col span={24}>
            <Title level={2}>Todo App</Title>
          </Col>
        </Row>
      </div>
    </main>
  )
}

export default Home