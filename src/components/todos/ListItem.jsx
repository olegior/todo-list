/* eslint-disable react/prop-types */
import { Col, Row, Typography, Checkbox } from "antd";
import { TodosButton } from "./TodosButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const ListItem = ({ todo, handleEditTodo }) => {
    const { Paragraph } = Typography;
    const { id, title, isCompleted } = todo;
    return (
        <Row
            data-log={JSON.stringify(todo)}
            justify='end'
            style={{ width: '100%' }}
            align='middle'>
            <Col span={1}>
                <TodosButton Component={Checkbox}
                    checked={isCompleted} action={isCompleted ? 'Активна' : 'Выполнена'}
                    type={'check'}
                    id={id}
                />
            </Col>
            <Col span={20} offset={1}>
                <Paragraph
                    editable={{
                        onChange: (v) => { handleEditTodo(id, v) },
                        icon: <TodosButton Component={EditOutlined} action='Изменена' />
                    }}

                    delete={isCompleted}
                    style={{
                        fontSize: '16px',
                        color: isCompleted ? 'gray' : 'black',
                        textAlign: 'left',
                    }}
                >{title}
                </Paragraph>
            </Col>
            <Col span={1} offset={1}>
                <TodosButton Component={DeleteOutlined}
                    type={'delete'}
                    id={id}
                    style={{ fontSize: '20px' }} action='Удалена' />
            </Col>
        </Row>
    )
}
