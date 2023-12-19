import { Drawer, List } from "antd"
import Paragraph from "antd/lib/typography/";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
export const LogDrawer = ({ open, handleOpen }) => {
    const log = useSelector(state => state.log)
    return (
        <Drawer open={open} onClose={handleOpen}>
            <List dataSource={log}
                renderItem={({ action, todo }) => <Paragraph>{action}{todo}</Paragraph>}
            />
        </Drawer>
    )
}
