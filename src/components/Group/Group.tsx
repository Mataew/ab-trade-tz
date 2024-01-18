import Subgroup from "../Subgroup/Subgroup";
import {IGroup} from "../../interfaces/interfaces";
import React, {FC} from "react";
import './Group.css';

interface GroupProps extends IGroup {
    onDeleteGroup: (groupId: number | string) => void;
    onUpdateSubGroups: (groupId: number | string) => void;
    onDeleteSubGroup: (groupId: number | string, subGroupId: number | string) => void;

}

const GroupComponent: FC<GroupProps> = ({ id, sum, subGroups, onDeleteGroup, onUpdateSubGroups, onDeleteSubGroup }) => {

    const handleOnClickDeleteSubGroup = (subGroupId: number | string) => {
        onDeleteSubGroup(id, subGroupId)
    }

    return (
        <div className='group'>
            <h3>Группа {id}</h3>
            <div>
                <h3>Сумма группы</h3>
                <input value={sum}/>
                <button onClick={() => onDeleteGroup(id)}>delete</button>
            </div>
            {(subGroups || []).map((subgroup) => (
                <Subgroup
                    onDeleteSubGroup={handleOnClickDeleteSubGroup}
                    key={subgroup.id}
                    {...subgroup}
                />
            ))}
            <button onClick={() => onUpdateSubGroups(id)}>Добавить подгруппу</button>
        </div>
    );
};

export default GroupComponent;
