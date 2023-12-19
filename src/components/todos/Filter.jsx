import { Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../store/slices/filterSlice';

// eslint-disable-next-line react/prop-types
export const Filter = () => {

    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const options = [
        { label: 'все', value: 'all' },
        { label: 'выполненые', value: 'completed' },
        { label: 'активные', value: 'active' },
    ];


    return (
        <Radio.Group
            options={options}
            value={filter}
            optionType="button"
            buttonStyle="outline"
            size='large'
            onChange={(e) => dispatch(toggleFilter(e.target.value))}
        >
        </Radio.Group>
    )
}
