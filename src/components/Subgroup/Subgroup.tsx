// SubgroupComponent.tsx
import React from 'react';
import Product from "../Product/Product";
import {ISubGroup} from "../../interfaces/interfaces";
import './Subgroup.css';


const Subgroup: React.FC<ISubGroup> = ({ id, sum, products }) => {
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
        </div>
    );
};

export default Subgroup;
