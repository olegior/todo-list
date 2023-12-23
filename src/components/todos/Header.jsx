import { UnorderedListOutlined, LogoutOutlined, CheckOutlined, CloseOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Flex, Menu } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { deleteToken } from '../../store/slices/tokenSlice';
import { useDispatch } from 'react-redux';
import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Header = memo(({ handleLogOpen, showSuccess, handleSuccess }) => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(deleteToken());
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
            label: `Уведомлять об успехе`,
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
        <AntHeader style={{ color: '#FFFFFF', padding: '0px' }} >
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
})
