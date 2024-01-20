import Subgroup from "../Subgroup/Subgroup";
import {IGroup} from "../../interfaces/interfaces";
import React, {FC} from "react";
import './Group.css';

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
            <h3>Группа {groupNumber}</h3>
            <div>
                <h3>Сумма группы</h3>
                <input value={sum}/>
                <button onClick={() => onDeleteGroup(id)}>delete</button>
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
            <button onClick={() => onUpdateSubGroups(id)}>Добавить подгруппу</button>
        </div>
    );
};

export default GroupComponent;
