import React, {useState} from 'react';
import Group from "./Group/Group";
import {IForm, IGroup, IProduct, ISubGroup} from "../interfaces/interfaces";

const Form = () => {

    const [formData, setFormData] = useState<IForm>({ sum: 0, groups: []});
    const [newObj, setNewObj] = useState({})


    // Функионал кнопок группы
    const handleUpdateGroups = () => { // функция добавления группы
        setFormData(prevState => {
            const newGroup: IGroup = {
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
                    const newSubGroup: ISubGroup = {
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

    const handleUpdateProducts = (groupId: number | string, subGroupId: number | string) => {
        setFormData(prevState => {
            const updatedGroups = prevState.groups.map(group => {
                if (group.id === groupId) {

                    const updatedSubGroups = group.subGroups.map(subGroup => {
                        if (subGroup.id === subGroupId) {
                            const newProduct: IProduct = {
                                id: Math.floor((Math.random() * 100) + 1),
                                name: 'hz',
                                sum: 5,
                                count: 5,
                                price: Math.floor((Math.random() * 100) + 1)
                            }

                            const updatedProducts = [...subGroup.products, newProduct]

                            return { ...subGroup, products: updatedProducts}
                        }
                        return subGroup
                    })

                    return { ...group, subGroups: updatedSubGroups}
                }
                return group
            })

            return { ...prevState, groups: updatedGroups }
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNewObj(p => ({
            ...p,
            [name]: value
        }))

    }

    console.log(newObj)

    return (
        <div>
            {(formData.groups || []).map((group) => (
                <Group
                    key={group.id}
                    onDeleteGroup={handleDeleteGroup}
                    onUpdateSubGroups={handleUpdateSubGroups}
                    onDeleteSubGroup={handleDeleteSubGroup}
                    onUpdateProducts={handleUpdateProducts}
                    onChange={handleChange}
                    {...group}
                />
            ))}
            <button onClick={() => handleUpdateGroups()}>Добавить группу</button>
        </div>
    );
};

export default Form;
