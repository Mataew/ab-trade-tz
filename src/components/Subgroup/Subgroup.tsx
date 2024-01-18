import React from 'react';
import Product from "../Product/Product";
import {ISubGroup} from "../../interfaces/interfaces";
import './Subgroup.css';

interface SubgroupProps extends ISubGroup {
    onDeleteSubGroupClick: (subGroupId: number | string) => void;
    onUpdateProductsClick: (subGroupId: number | string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Subgroup: React.FC<SubgroupProps> = ({ id, sum, products, onDeleteSubGroupClick, onChange, onUpdateProductsClick }) => {
    return (
        <div className='subgroup'>
            <h4>Подгруппа {id}</h4>
            <div>
                <h4>Сумма подгруппы</h4>
                <input value={sum}/>
            </div>
            <button style={{border: '1px solid red', background: 'red', color: 'white'}} onClick={() => onDeleteSubGroupClick(id)}>Удалить подгруппу</button>
            {products.map((product) => (
                <Product
                    key={product.id}
                    onChange={onChange}
                    {...product}
                />
            ))}
            <button onClick={() => onUpdateProductsClick(id)}>Добавть продукт</button>
        </div>
    );
};

export default Subgroup;
