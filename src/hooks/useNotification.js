import { notification } from "antd"

export const useNotification = (showSuccess = false, placement = 'bottom') => {
    const [api, contextHolder] = notification.useNotification();
    const fn = (response) => {
        const showNotification = (type, response) => {
            api[type]({
                message: response.param,
                description: response.msg,
                placement
            })
        }
        response.errors && response.errors.forEach(e => showNotification('error', e));
        response.message && showNotification('error', { msg: response.message });

        if (!response.hasOwnProperty('success') && !response.hasOwnProperty('message') && showSuccess) {
            showNotification('success', { msg: 'Успешно' })
        }
    }

    return [fn, contextHolder];

}
