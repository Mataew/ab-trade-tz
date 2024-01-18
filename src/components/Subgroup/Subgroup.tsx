import React from 'react';
import Product from "../Product/Product";
import {ISubGroup} from "../../interfaces/interfaces";
import './Subgroup.css';

interface SubgroupProps extends ISubGroup {
    onDeleteSubGroup: (groupId: number | string, subGroupId: number | string) => void;
    onUpdateProducts: (groupId: number | string, subGroupId: number | string) => void;
    onDeleteProduct: (groupId: number | string, subGroupId: number | string, productId: number | string) => void;
    groupId: number | string;
}

const Subgroup: React.FC<SubgroupProps> = ({
    id,
    sum,
    products,
    groupId,
    onDeleteSubGroup,
    onUpdateProducts,
    onDeleteProduct
}) => {
    return (
        <div className='subgroup'>
            <h4>Подгруппа {id}</h4>
            <div>
                <h4>Сумма подгруппы</h4>
                <input value={sum}/>
            </div>
            <button style={{border: '1px solid red', background: 'red', color: 'white'}} onClick={() => onDeleteSubGroup(groupId, id)}>Удалить подгруппу</button>
            {products.map((product) => (
                <Product
                    key={product.id}
                    groupId={groupId}
                    subGroupId={id}
                    onDeleteProduct={onDeleteProduct}
                    {...product}
                />
            ))}
            <button onClick={() => onUpdateProducts(groupId, id)}>Добавть продукт</button>
        </div>
    );
};

export default Subgroup;
