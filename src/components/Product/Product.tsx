import {IProduct} from "../../interfaces/interfaces";
import Input from "../../Shared/Input/Input";
import Button, {ThemeButton} from "../../Shared/Button/Button";

interface ProductProps extends IProduct {
    groupId: string | number;
    subGroupId: string | number;
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
                <li><Input onChange={(event) => onChange(groupId, subGroupId, id, event.target.name, event.target.value)} name='name' value={name}/></li>
                <li><Input onChange={(event) => onChange(groupId, subGroupId, id, event.target.name, event.target.value)} name='price' value={price}/></li>
                <li><Input onChange={(event) => onChange(groupId, subGroupId, id, event.target.name, event.target.value)} name='count' value={count}/></li>
                <li><Input onChange={(event) => onChange(groupId, subGroupId, id, event.target.name, event.target.value)} name='sum' value={sum}/></li>
                <li><Button theme={ThemeButton.DELETE} onClick={() => onDeleteProduct(groupId, subGroupId, id)}>Удалить</Button></li>
            </ul>
        </div>
    );
};

export default ProductComponent;
