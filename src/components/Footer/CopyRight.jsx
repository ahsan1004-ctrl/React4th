import { Col, Row, Typography } from 'antd'

const { Paragraph } = Typography
const CopyRight = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <Row>
                <Col span={24}>
                    <Paragraph className='p-2 m-0 text-center text-light'>&copy; {year}. All Rights Reserved.</Paragraph>
                </Col>
            </Row>
        </>
    )
}

export default CopyRight