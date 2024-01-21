import React, {FC, ButtonHTMLAttributes} from 'react';
import './Button.css'

export enum ThemeButton {
    DELETE = 'delete',
    ADD = 'add'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {

    const { children, theme, onClick } = props;

    return (
        <button onClick={onClick} className={`button_${theme}`}>
            {children}
        </button>
    );
};

export default Button;