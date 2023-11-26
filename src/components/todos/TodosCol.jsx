import { Col } from 'antd';
export const TodosCol = ({ children }) => {
    return (
        <Col
            span={24}
            xs={{ span: 24 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 12, offset: 6 }}
        >
            {children}
        </Col>
    )
}
