import { Input, Form as AntForm, Row, Col, Radio } from 'antd'
import { useForm } from 'antd/es/form/Form';

export const Form = ({ name, fields = [], cb, button }) => {
    const [form] = useForm();
    const formStyle = {
        padding: '40px 40px 0',
        margin: '20px 0',
        border: '1px solid #d9d9d9',
        borderRadius: '8px',
    }
    const rules = [
        {
            required: 'true',
            message: 'Поле должно быть заполнено!',
        },
    ]
    const password = <Input.Password placeholder={'введите пароль'} />;
    const gender = <Radio.Group value={'male'}>
        <Radio.Button value={'male'}>М</Radio.Button>
        <Radio.Button value={'female'}>Ж</Radio.Button>
    </Radio.Group>

    const inpType = {
        gender,
        password,
    }

    const formOnFinish = (data) => {
        const trimmedData = {};
        for (let key in data) {
            trimmedData[key] = data[key].trim();
        }
        form.setFieldsValue(trimmedData)
        cb(trimmedData);
    }


    return (
        <AntForm form={form}
            name={name}
            className="control"
            style={formStyle}
            size='large'
            onFinish={formOnFinish}
            labelAlign='left'
        >
            {fields.map(field => {
                const { name, label, placeholder, type, rule = [] } = field;
                return (
                    <Row key={name}>
                        <Col span={24}>
                            <AntForm.Item
                                label={label}
                                name={name}
                                placeholder={placeholder}
                                labelCol={{ span: 4 }}
                                wrapperCol={label && { offset: 1 }}
                                rules={[...rules, ...rule]}
                                validateDebounce={250}
                            >
                                {inpType[type] || <Input placeholder={placeholder} type={type} max={100} min={10} />}
                            </AntForm.Item>
                        </Col>
                    </Row>)
            })}
            <Row>
                <Col span={24}>
                    <AntForm.Item>
                        {button}
                    </AntForm.Item>
                </Col>
            </Row>
        </AntForm>
    )
}
