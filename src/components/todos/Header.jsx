import { UnorderedListOutlined, LogoutOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { deleteFromLocalStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

export const Header = ({ handleLogOpen, showSuccess, setShowSuccess }) => {
    const navigate = useNavigate()
    const logout = () => {
        deleteFromLocalStorage('token');
        navigate(0);
    }
    return (
        <AntHeader style={{ color: '#FFFFFF' }} >
            <Flex justify='right' gap={10} style={{ marginTop: '16px' }}>
                <Button
                    ghost
                    onClick={handleLogOpen}>
                    <UnorderedListOutlined />
                    История
                </Button>

                <Button
                    ghost
                    onClick={() => setShowSuccess(prev => !prev)}>
                    {showSuccess ? <CheckOutlined /> : <CloseOutlined />}
                    Уведомления
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
