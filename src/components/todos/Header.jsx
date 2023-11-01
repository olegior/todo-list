import { UnorderedListOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import { Header as AntHeader } from 'antd/es/layout/layout'

export const Header = ({ handleLogOpen = false }) => {

    return (
        <AntHeader style={{ color: '#FFFFFF' }} >
            <Flex justify='flex-start' style={{ marginTop: '16px' }}>
                <Button
                    ghost
                    onClick={handleLogOpen}>
                    История
                    <UnorderedListOutlined />
                </Button>
            </Flex>
        </AntHeader>
    )
}
