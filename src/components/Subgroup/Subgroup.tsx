import React from 'react';
import Product from "../Product/Product";
import {ISubGroup} from "../../interfaces/interfaces";
import './Subgroup.css';

interface SubgroupProps extends ISubGroup {
    groupId: number | string;
    subGroupNumber: number;
    onDeleteSubGroup: (groupId: number | string, subGroupId: number | string) => void;
    onUpdateProducts: (groupId: number | string, subGroupId: number | string) => void;
    onDeleteProduct: (groupId: number | string, subGroupId: number | string, productId: number | string) => void;
    onChange: (groupId: number | string, subGroupId: number | string, productId: number | string, name: string, newValue: number | string) => void;

}

const Subgroup: React.FC<SubgroupProps> = ({
    id,
    sum,
    products,
    groupId,
    subGroupNumber,
    onDeleteSubGroup,
    onUpdateProducts,
    onDeleteProduct,
    onChange
}) => {
    return (
        <div className='subgroup'>
            <h4>Подгруппа {subGroupNumber}</h4>
            <div>
                <h4>Сумма подгруппы</h4>
                <input value={sum}/>
            </div>
            <button style={{border: '1px solid red', background: 'red', color: 'white'}} onClick={() => onDeleteSubGroup(groupId, id)}>Удалить подгруппу</button>
            {products.map((product, index) => (
                <Product
                    key={product.id}
                    groupId={groupId}
                    subGroupId={id}
                    productNumber={index + 1}
                    onDeleteProduct={onDeleteProduct}
                    onChange={onChange}
                    {...product}
                />
            ))}
            <button onClick={() => onUpdateProducts(groupId, id)}>Добавть продукт</button>
        </div>
    );
};

export default Subgroup;
