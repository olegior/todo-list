
export const CustomButton = ({ Component = null, onClick = null, checked = false, style = {}, name = '' }) => {
    return (
        <>
            <Component
                onClick={onClick}
                checked={checked}
                style={style}
                data-name={name}
            />
        </>
    )
}
