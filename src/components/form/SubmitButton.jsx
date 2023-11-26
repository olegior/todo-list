import { Button } from 'antd'

export const SubmitButton = (props) => {
    return (
        <Button type="primary" ghost htmlType="submit" {...props}></Button>
    )
}
