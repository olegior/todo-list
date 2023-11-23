/* eslint-disable react/prop-types */
import { Col, Row, Typography, Checkbox } from "antd";
import { CustomButton } from "./CustomButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
export const ListItem = ({ todo, handleEditTodo }) => {
    const { Paragraph } = Typography;
    // const { handleCompletedTodo, handleDeleteTodo, handleEditTodo } = handleTodos;
    const { id, title: text, isCompleted: completed } = todo;

    return (
        <Row
            data-log={JSON.stringify(todo)}
            justify='end'
            style={{ width: '100%' }}
            align='middle'>
            <Col span={1}>
                <CustomButton Component={Checkbox}
                    //  onClick={() => handleCompletedTodo(id)} 
                    checked={completed} action={completed ? 'Активна' : 'Выполнена'}
                    type={'check'}
                    id={id}
                />
            </Col>
            <Col span={20} offset={1}>
                <Paragraph
                    editable={{
                        onChange: (v) => { handleEditTodo(id, v) },
                        icon: <CustomButton Component={EditOutlined} action='Изменена' />
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
                <CustomButton Component={DeleteOutlined} 
                // onClick={() => handleDeleteTodo(id)} 
                type={'delete'}
                id={id}
                style={{ fontSize: '20px' }} action='Удалена' />
            </Col>
        </Row>
    )
}
