import { UnorderedListOutlined, LogoutOutlined, CheckOutlined, CloseOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Flex, Menu } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { deleteFromLocalStorage } from '../../utils/localStorage';

export const Header = ({ handleLogOpen, showSuccess, handleSuccess }) => {
    const logout = () => {
        deleteFromLocalStorage('token');
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
