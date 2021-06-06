import React from 'react'
import './Button.css'

const STYLES [
    'btn--primary',
    'btn--outline'
]

const SYZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

}) => {
const checkButtonStyle = Styles.includes{buttonStyle} ? buttonStyle : STYLES[0]
const checkButtonStyle = SIZES.includes{buttonSize} ? buttonSize : SIZES[0]

return(
    <button className={'btn ${checkButtonStyle} 
    $ {checkButtonSize}’} onClick={onClick} type={type}>
{children}
</button>
)
}