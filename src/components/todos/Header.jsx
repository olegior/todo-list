import { UnorderedListOutlined, LogoutOutlined, CheckOutlined, CloseOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Flex, Menu } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { deleteFromLocalStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

export const Header = ({ handleLogOpen, showSuccess, handleSuccess }) => {
    const navigate = useNavigate();
    const logout = () => {
        deleteFromLocalStorage('token');
        navigate(0);
    }

    const handleMenuClick = (e) => {
        const handlers = {
            'history': handleLogOpen,
            'notification': handleSuccess,
            'logout': logout
        }
        handlers[e.key]();
    }

    const items = [
        {
            label: 'История',
            key: 'history',
            icon: <UnorderedListOutlined />,
        },
        {
            label: `Успешные уведомления`,
            key: 'notification',
            icon: showSuccess ? <CheckOutlined /> : <CloseOutlined />,
        },
        {
            label: 'Выйти',
            key: 'logout',
            icon: <LogoutOutlined />,
        },
    ]

    return (
        <AntHeader style={{ color: '#FFFFFF' }} >
            <Flex justify='flex-end'>
                <Menu
                    mode="horizontal"
                    theme="dark"
                    items={items}
                    onClick={handleMenuClick}
                    selectable={false}
                    overflowedIndicator={<MenuFoldOutlined />}
                />
            </Flex>
        </AntHeader>
    )
}
