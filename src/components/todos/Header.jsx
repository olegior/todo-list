import { UnorderedListOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { CustomButton } from './CustomButton';
import { AddButton } from './AddButton';
import { deleteFromLocalStorage } from '../../utils/localStorage';
import { redirect, useNavigate } from 'react-router-dom';

export const Header = ({ handleLogOpen = false }) => {
    const navigate = useNavigate()
    const logout = () => {
        deleteFromLocalStorage('token');
        // navigate('/login', { replace: true });
        navigate(0)
    }
    return (
        <AntHeader style={{ color: '#FFFFFF' }} >
            <Flex justify='space-between' style={{ marginTop: '16px' }}>
                <Button
                    ghost
                    onClick={handleLogOpen}>
                    История
                    <UnorderedListOutlined />
                </Button>
                <CustomButton Component={LogoutOutlined} onClick={logout} />
            </Flex>
        </AntHeader>
    )
}
