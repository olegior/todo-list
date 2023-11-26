
export const TodosButton = ({ Component = null, onClick = null, checked = false, style = {}, action = '', title, type, id }) => {
    return (
        <>
            <Component
                className='TodosButton'
                onClick={onClick}
                checked={checked}
                style={{ cursor: 'pointer', ...style }}
                data-action={action}
                data-type={type}
                data-id={id}
            >{title}</Component>
        </>
    )
}
