import { Radio, } from 'antd'

// eslint-disable-next-line react/prop-types
export const Filter = ({ hanldeFilter, options = [] }) => {
    const [filter, setFilter] = hanldeFilter;

    return (
        <Radio.Group
            options={options}
            value={filter}
            optionType="button"
            buttonStyle="outline"
            size='large'
            onChange={(e) => setFilter(e.target.value)}
        >
        </Radio.Group>
    )
}
