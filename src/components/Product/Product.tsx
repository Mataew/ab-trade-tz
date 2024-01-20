import React from 'react';
import {IProduct} from "../../interfaces/interfaces";

interface ProductProps extends IProduct {
    groupId: string | number;
    subGroupId: string | number;
    productNumber: number;
    onDeleteProduct: (groupId: number | string, subGroupId: number | string, productId: number | string) => void;
    onChange: (groupId: number | string, subGroupId: number | string, productId: number | string, name: string, newValue: number | string) => void;
}

const ProductComponent: React.FC<ProductProps> = ({
    id,
    name,
    sum,
    count,
    price,
    groupId,
    subGroupId,
    productNumber,
    onDeleteProduct,
    onChange
}) => {
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
                <li><input onChange={(event) => onChange(groupId, subGroupId, id, event.target.name, event.target.value)} name='name' value={name + productNumber}/></li>
                <li><input onChange={(event) => onChange(groupId, subGroupId, id, event.target.name, event.target.value)} name='price' value={price}/></li>
                <li><input onChange={(event) => onChange(groupId, subGroupId, id, event.target.name, event.target.value)} name='count' value={count}/></li>
                <li><input onChange={(event) => onChange(groupId, subGroupId, id, event.target.name, event.target.value)} name='sum' value={sum}/></li>
                <li><button onClick={() => onDeleteProduct(groupId, subGroupId, id)}>Удалить</button></li>
            </ul>
        </div>
    );
};

export default ProductComponent;
