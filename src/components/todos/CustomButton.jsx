
export const CustomButton = ({ Component = null, onClick = null, checked = false, style = {}, action = '', title }) => {
    return (
        <>
            <Component
                onClick={onClick}
                checked={checked}
                style={style}
                data-action={action}
            >{title}</Component>
        </>
    )
}
