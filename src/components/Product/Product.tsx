// ProductComponent.tsx
import React from 'react';
import {IProduct} from "../../interfaces/interfaces";

const ProductComponent: React.FC<IProduct> = ({ id, name, sum, count, price }) => {
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
                <li><input value={id}/></li>
                <li><input value={name}/></li>
                <li><input value={sum}/></li>
                <li><input value={price}/></li>
                <li><button>Удалить</button></li>
            </ul>
        </div>
    );
};

export default ProductComponent;
