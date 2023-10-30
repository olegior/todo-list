/* eslint-disable react/prop-types */
import { Col, Row, Typography, Checkbox } from "antd";
import { CustomButton } from "./CustomButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
export const ListItem = ({ todo, handleTodos }) => {
    const { Paragraph } = Typography;
    const { handleCompletedTodo, handleDeleteTodo, handleEditTodo } = handleTodos;
    const { id, todo: text, completed } = todo;

    return (
        <Row
            data-log={JSON.stringify(todo)}
            justify='end'
            style={{ width: '100%' }}
            align='middle'>
            <Col span={1}>
                <CustomButton Component={Checkbox} onClick={() => handleCompletedTodo(id)} checked={completed} name='checkButton' />
            </Col>
            <Col span={20} offset={1}>
                <Paragraph
                    editable={{
                        // editing: false,
                        onChange: (v) => {
                            handleEditTodo(id, v)
                        },
                        icon: <CustomButton Component={EditOutlined} name='editButton' />
                    }}

                    delete={completed}
                    style={{
                        fontSize: '16px',
                        color: completed ? 'gray' : 'black',
                        textAlign: 'left',
                    }}
                >{text}
                </Paragraph>
            </Col>
            <Col span={1} offset={1}>
                <CustomButton Component={DeleteOutlined} onClick={() => handleDeleteTodo(id)} style={{ fontSize: '20px' }} name='deleteButton' />
            </Col>
        </Row>
    )
}
