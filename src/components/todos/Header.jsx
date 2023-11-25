import { UnorderedListOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { deleteFromLocalStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

export const Header = ({ handleLogOpen }) => {
    const navigate = useNavigate()
    const logout = () => {
        deleteFromLocalStorage('token');
        navigate(0);
    }
    return (
        <AntHeader style={{ color: '#FFFFFF' }} >
            <Flex justify='space-between' style={{ marginTop: '16px' }}>
                <Button
                    ghost
                    onClick={handleLogOpen}>
                    <UnorderedListOutlined />
                    История
                </Button>
                <Button
                    ghost
                    onClick={logout}>
                    <LogoutOutlined />
                    Выйти
                </Button>
            </Flex>
        </AntHeader>
    )
}
