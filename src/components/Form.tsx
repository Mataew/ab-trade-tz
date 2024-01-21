import {useEffect, useState} from 'react';
import Group from "./Group/Group";
import {IForm, IGroup, IProduct, ISubGroup} from "../interfaces/interfaces";
import Button, {ThemeButton} from "../Shared/Button/Button";

const Form = () => {

    const formDataInLocal = JSON.parse(localStorage.getItem('formDataInLocal') || '')
    const [formData, setFormData] = useState<IForm>(formDataInLocal || { sum: 0, groups: []});

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

    // функционал продуктов
    const handleUpdateProducts = (groupId: number | string, subGroupId: number | string) => {
        setFormData(prevState => {
            const updatedGroups = prevState.groups.map(group => {
                if (group.id === groupId) {
                    const updatedSubGroups = group.subGroups.map(subGroup => {
                        if (subGroup.id === subGroupId) {

                            const newProduct: IProduct = {
                                id: Math.floor((Math.random() * 100) + 1),
                                name: `Продукт ${subGroup.products.length + 1}`,
                                sum: 0,
                                count: 0,
                                price: 0
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

    const handleDeleteProduct = (groupId: number | string, subGroupId: number | string, productId: number | string) => {
        setFormData(prevState => {
            const updatedGroups = prevState.groups.map(group => {
                if (group.id === groupId) {

                    const updatedSubGroups = group.subGroups.map(subGroup => {
                        if (subGroup.id === subGroupId) {

                            const updatedProducts = subGroup.products.filter(product => product.id !== productId)

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


    const handleChange = (groupId: number | string, subGroupId: number | string, productId: number | string, name: string, newValue: number | string) => {
        setFormData((prevState) => {

            const updatedGroups = prevState.groups.map(group => {
                if (group.id === groupId) {

                    const updatedSubGroups = group.subGroups.map(subGroup => {

                        if (subGroup.id === subGroupId) {

                            const updatedProducts = subGroup.products.map(product => {
                                if (product.id === productId) {
                                    return {
                                        ...product,
                                        [name]: newValue
                                    }
                                }

                                return product
                            })

                            return { ...subGroup, products: updatedProducts}
                        }

                        return subGroup
                    })

                    return { ...group, subGroups: updatedSubGroups}
                }

                return group
            })

            return {
                ...prevState,
                groups: updatedGroups,
            };
        });
    }

    useEffect(() => {
        setFormData((prevState) => {

            const updatedGroups = prevState.groups.map(group => {

                const updatedSubgroups = group.subGroups.map(subgroup => {

                    const updatedProduct = subgroup.products.map(product => {
                        return { ...product, sum: product.price * product.count }
                    })

                    const subgroupSum = updatedProduct.reduce((a,b) => a + b.sum, 0)

                    return { ...subgroup, sum: subgroupSum}
                })

                const groupsSum = updatedSubgroups.reduce((a,b) => a + b.sum, 0)

                return { ...group, sum: groupsSum}
            })

            return {
                ...prevState,
                groups: updatedGroups,
            };
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('formDataInLocal', JSON.stringify(formData));
    }, [formData])

    return (
        <div>
            {(formData.groups || []).map((group, index) => (
                <Group
                    key={group.id}
                    groupNumber={index + 1}
                    onDeleteGroup={handleDeleteGroup}
                    onUpdateSubGroups={handleUpdateSubGroups}
                    onDeleteSubGroup={handleDeleteSubGroup}
                    onUpdateProducts={handleUpdateProducts}
                    onDeleteProduct={handleDeleteProduct}
                    onChange={handleChange}
                    {...group}
                />
            ))}
            <Button theme={ThemeButton.ADD} onClick={() => handleUpdateGroups()}>Добавить группу</Button>
        </div>
    );
};

export default Form;
