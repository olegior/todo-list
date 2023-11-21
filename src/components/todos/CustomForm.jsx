import { Input, Form, Row, Col } from 'antd'
import { useForm } from 'antd/es/form/Form';

export const CustomForm = ({ name, fields = [], cb, button }) => {
    const [form] = useForm();

    return (

        <Form form={form}
            name={name}
            className="control"
            style={{
                padding: '20px',
                paddingBottom: 0,
                marginBottom: '20px',
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
            }}
            size='large'
            onFinish={
                (e) => {
                    cb(e);
                    form.resetFields();
                }}
        >
            {fields.map(field => {
                const { name, label, placeholder, type = 'text' } = field;
                return (
                    <Row key={name}>
                        <Col span={24}
                            sm={{ span: 18 }}>
                            <Form.Item
                                label={label}
                                name={name}
                                placeholder={placeholder}
                                rules={[{
                                    required: 'true',
                                    message: 'Поле должно быть заполнено!',
                                }]}
                            >
                                <Input placeholder={placeholder} type={type} />
                            </Form.Item>
                        </Col>
                    </Row>)
            })}
            <Row>
                <Col span={24} sm={{ span: 6 }} >
                    <Form.Item>
                        {button}
                    </Form.Item>
                </Col>
            </Row>
        </Form>

    )
}
