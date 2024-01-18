// SubgroupComponent.tsx
import React from 'react';
import Product from "../Product/Product";
import {ISubGroup} from "../../interfaces/interfaces";
import './Subgroup.css';

interface SubgroupProps extends ISubGroup {
    onDeleteSubGroup: (subGroupId: number | string) => void;
}

const Subgroup: React.FC<SubgroupProps> = ({ id, sum, products, onDeleteSubGroup }) => {
    return (
        <div className='subgroup'>
            <h4>Подгруппа {id}</h4>
            <div>
                <h4>Сумма подгруппы</h4>
                <input value={sum}/>
            </div>
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
            <button style={{border: '1px solid red', background: 'red', color: 'white'}} onClick={() => onDeleteSubGroup(id)}>Удалить подгруппу</button>
        </div>
    );
};

export default Subgroup;
