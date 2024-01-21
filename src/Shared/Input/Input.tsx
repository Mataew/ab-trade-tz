import {FC, InputHTMLAttributes} from "react";
import './Input.css'


const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({children, value, onChange, name}) => {
    return (
        <input onChange={onChange} name={name} className='input' value={value}>
            {children}
        </input>
    );
};

export default Input;