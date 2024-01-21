import Subgroup from "../Subgroup/Subgroup";
import {IGroup} from "../../interfaces/interfaces";
import {FC} from "react";
import './Group.css';
import Button, {ThemeButton} from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";

interface GroupProps extends IGroup {
    groupNumber: number;
    onDeleteGroup: (groupId: number | string) => void;
    onUpdateSubGroups: (groupId: number | string) => void;
    onDeleteSubGroup: (groupId: number | string, subGroupId: number | string) => void;
    onUpdateProducts: (groupId: number | string, subGroupId: number | string) => void;
    onDeleteProduct: (groupId: number | string, subGroupId: number | string, productId: number | string) => void;
    onChange: (groupId: number | string, subGroupId: number | string, productId: number | string, name: string, newValue: number | string) => void;
}

const GroupComponent: FC<GroupProps> = ({
    id,
    sum,
    subGroups,
    groupNumber,
    onDeleteGroup,
    onUpdateSubGroups,
    onDeleteSubGroup,
    onUpdateProducts,
    onDeleteProduct,
    onChange
}) => {
    return (
        <div className='group'>
            <div className='group_header'>
                <div className='titles'>
                    <h3>Группа {groupNumber}</h3>
                    <h5>Сумма группы:</h5>
                </div>
                <Input value={sum} />
                <Button theme={ThemeButton.DELETE} onClick={() => onDeleteGroup(id)}>Удалить группу</Button>
            </div>
            {(subGroups || []).map((subgroup, index) => (
                <Subgroup
                    key={subgroup.id}
                    subGroupNumber={index + 1}
                    onDeleteSubGroup={onDeleteSubGroup}
                    onUpdateProducts={onUpdateProducts}
                    onDeleteProduct={onDeleteProduct}
                    groupId={id}
                    onChange={onChange}
                    {...subgroup}
                />
            ))}
            <Button theme={ThemeButton.ADD} onClick={() => onUpdateSubGroups(id)}>Добавить подгруппу</Button>
        </div>
    );
};

export default GroupComponent;
