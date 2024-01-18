import React from 'react';
import {IProduct} from "../../interfaces/interfaces";

interface ProductProps extends IProduct {
    groupId: string | number;
    subGroupId: string | number;
    onDeleteProduct: (groupId: number | string, subGroupId: number | string, productId: number | string) => void;
}

const ProductComponent: React.FC<ProductProps> = ({ id, name, sum, count, price, groupId, subGroupId, onDeleteProduct }) => {
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
                <li><input name='id' value={id}/></li>
                <li><input name='price' value={price}/></li>
                <li><input name='count' value={count}/></li>
                <li><input name='sum' value={sum}/></li>
                <li><button onClick={() => onDeleteProduct(groupId, subGroupId, id)}>Удалить</button></li>
            </ul>
        </div>
    );
};

export default ProductComponent;
