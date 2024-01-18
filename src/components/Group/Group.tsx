import Subgroup from "../Subgroup/Subgroup";
import {IGroup} from "../../interfaces/interfaces";
import {FC} from "react";
import './Group.css';

const GroupComponent: FC<IGroup> = ({ id, sum, subGroups }, setFormData: () => void) => {

    const reCalculateGroupSum = () => {
        const total = subGroups.reduce((sum, group) => sum + group.sum, 0);
    }

    return (
        <div className='group'>
            <h3>Группа {id}</h3>
            <div>
                <h3>Сумма группы</h3>
                <input value={sum}/>
            </div>
            {subGroups.map((subgroup) => (
                <Subgroup key={subgroup.id} {...subgroup} />
            ))}
        </div>
    );
};

export default GroupComponent;
