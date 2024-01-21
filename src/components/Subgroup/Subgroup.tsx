import Product from "../Product/Product";
import {ISubGroup} from "../../interfaces/interfaces";
import Button, {ThemeButton} from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
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
           <div className='subgroup_header'>
               <div className='titles'>
                   <h3>Подгруппа {subGroupNumber}</h3>
                   <h5>Сумма подгруппы</h5>
               </div>
               <Input value={sum}/>
               <Button theme={ThemeButton.DELETE} onClick={() => onDeleteSubGroup(groupId, id)}>Удалить подгруппу</Button>
           </div>
            {products.map((product) => (
                <Product
                    key={product.id}
                    groupId={groupId}
                    subGroupId={id}
                    onDeleteProduct={onDeleteProduct}
                    onChange={onChange}
                    {...product}
                />
            ))}
            <Button theme={ThemeButton.ADD} onClick={() => onUpdateProducts(groupId, id)}>Добавть продукт</Button>
        </div>
    );
};

export default Subgroup;
