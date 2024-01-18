// FormComponent.tsx
import React, {useState} from 'react';
import Group from "./Group/Group";
import {IForm} from "../interfaces/interfaces";
import group from "./Group/Group";
import subgroup from "./Subgroup/Subgroup";
import product from "./Product/Product";
//
// const initialData = {
//     sum: 0,
//     groups: [
//         {
//             id: 1,
//             sum: 8,
//             subGroups: [
//                 {
//                     id: 12,
//                     sum: 4,
//                     products: [
//                         { id: 111, name: 'Product X', sum: 10, count: 2, price: 14 },
//                     ],
//                 },
//                 {
//                     id: 11,
//                     sum: 4,
//                     products: [
//                         { id: 111, name: 'Product X', sum: 10, count: 2, price: 14 },
//                     ],
//                 },
//             ],
//         },
//     ]
// };


const Form = () => {

    const [formData, setFormData] = useState<IForm>({ sum: 0, groups: []});


    // Функионал кнопок группы
    const handleUpdateGroups = () => { // функция добавления группы
        setFormData(prevState => {
            const newGroup = {
                sum: 0,
                id: Math.floor((Math.random() * 100) + 1),
                subGroups: []
            }

            const updatedGroups = [...prevState.groups, newGroup]

            return { ...prevState, groups: updatedGroups}
        })
    }

    const handleDeleteGroup = (groupId: number | string) => { // функция удаления группы
        setFormData(prevState => {
            const newGroups = prevState.groups.filter(group => group.id !== groupId)

            return { ...prevState, groups: newGroups}
        })
    }


    // Функционал кнопок подгруппы
    const handleUpdateSubGroups = (groupId: number | string) => { // функия добавления подгруппы
        setFormData(prevState => {
            const updatedGroups = prevState.groups.map(group => {
                if (group.id === groupId) {
                    const newSubGroup = {
                        sum: 0,
                        id: Math.floor((Math.random() * 100) + 1),
                        products: []
                    }
                    const updatedSubGroups = [...group.subGroups, newSubGroup]

                    return { ...group, subGroups: updatedSubGroups}
                }
                return group
            })

            return { ...prevState, groups: updatedGroups }
        });
    }

    const handleDeleteSubGroup = (groupId: number | string, subGroupId: number | string) => {
        setFormData(prevState => {
            const updatedGroups = prevState.groups.map(group => {
                if (group.id === groupId) {
                    const updatedSubGroups = group.subGroups.filter(subGroup => subGroupId !== subGroup.id)

                    return { ...group, subGroups: updatedSubGroups}
                }
                return group
            })
            return { ...prevState, groups: updatedGroups }
        });
    }

    return (
        <div>
            {(formData.groups || []).map((group) => (
                <Group
                    key={group.id}
                    onDeleteGroup={handleDeleteGroup}
                    onUpdateSubGroups={handleUpdateSubGroups}
                    onDeleteSubGroup={handleDeleteSubGroup}
                    {...group}
                />
            ))}
            <button onClick={() => handleUpdateGroups()}>Добавить группу</button>
        </div>
    );
};

export default Form;
