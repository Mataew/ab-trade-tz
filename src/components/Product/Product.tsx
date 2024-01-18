import React from 'react';
import {IProduct} from "../../interfaces/interfaces";

interface ProductProps extends IProduct {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductComponent: React.FC<ProductProps> = ({ id, name, sum, count, price, onChange }) => {

    return (
        <div className='product'>
            <ul>
                <li>Название</li>
                <li>Цена</li>
                <li>Кол-во</li>
                <li>Сумма</li>
                <li></li>
            </ul>
            <ul>
                <li><input onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} name='id' value={id}/></li>
                <li><input onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} name='price' value={price}/></li>
                <li><input onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} name='count' value={count}/></li>
                <li><input onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} name='sum' value={sum}/></li>
                <li><button>Удалить</button></li>
            </ul>
        </div>
    );
};

export default ProductComponent;
