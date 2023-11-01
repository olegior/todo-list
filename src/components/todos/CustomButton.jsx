
export const CustomButton = ({ Component = null, onClick = null, checked = false, style = {}, action = '', }) => {
    return (
        <>
            <Component
                onClick={onClick}
                checked={checked}
                style={style}
                data-action={action}
            />
        </>
    )
}
