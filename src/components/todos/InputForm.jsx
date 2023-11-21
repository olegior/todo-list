import { Input, Form, Row, Col } from 'antd'
import { useForm } from 'antd/es/form/Form';
import { AddButton } from './AddButton';
import { CustomButton } from './CustomButton';
import { addTodo } from '../../utils/todos';

export const InputForm = ({ controlTodos = [] }) => {
    const [form] = useForm();
    const [todos, handleTodos] = controlTodos;

    const handleSubmitForm = (e) => {
        // const newTodo = { id: Date.now(), todo: e.todo, completed: false };
        // handleTodos(addTodo(todos, newTodo));
        // handleTodos(addTodo(todos, {title: e.todo}));
        handleTodos(addTodo(e.todo));
        form.resetFields();

    }

    return (
        <>
            <Form form={form}
                name='inputForm'
                className="control"
                style={{
                    padding: '20px',
                    paddingBottom: 0,
                    marginBottom: '20px',
                    border: '1px solid #d9d9d9',
                    borderRadius: '8px',
                }}
                size='large'
                onFinish={handleSubmitForm}
            >
                <Row>
                    <Col span={24}
                        sm={{ span: 18 }}>
                        <Form.Item
                            label='Введите текст'
                            name='todo'
                            placeholder='todo...'
                            rules={[{
                                required: 'true',
                                message: 'Поле должно быть заполнено!',
                            }]}
                        >
                            <Input placeholder='todo...' />
                        </Form.Item>
                    </Col>
                    <Col span={24} sm={{ span: 6 }} >
                        <Form.Item>
                            <CustomButton Component={AddButton} action='Добавлена' title='Добавить' />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}