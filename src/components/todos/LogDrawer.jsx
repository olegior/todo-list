import { Drawer, List } from "antd"
import Paragraph from "antd/lib/typography/";
import { getFromLocalStorage } from "../../utils/localStorage";

// eslint-disable-next-line react/prop-types
export const LogDrawer = ({ open, handleOpen }) => {
    const log = Array.isArray(getFromLocalStorage('log')) ? getFromLocalStorage('log') : [];
    console.log(log);
    return (
        <Drawer open={open} onClose={handleOpen}>
            <List dataSource={log}
                renderItem={({ action, todo }) => <Paragraph>{action}{todo}</Paragraph>}
            />
        </Drawer>
    )
}
