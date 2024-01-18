// FormComponent.tsx
import React, {useState} from 'react';
import Group from "./Group/Group";
import {IForm} from "../interfaces/interfaces";

const initialData = {
    sum: 0,
    groups: [
        {
            id: 1,
            sum: 8,
            subGroups: [
                {
                    id: 11,
                    sum: 4,
                    products: [
                        { id: 111, name: 'Product X', sum: 10, count: 2, price: 14 },
                    ],
                },
                {
                    id: 11,
                    sum: 4,
                    products: [
                        { id: 111, name: 'Product X', sum: 10, count: 2, price: 14 },
                    ],
                },
            ],
        },
    ]
};


const Form= () => {

    const [formData, setFormData] = useState<IForm>(initialData)

    return (
        <div>
            {formData.groups.map((group) => (
                <Group key={group.id} {...group} />
            ))}
        </div>
    );
};

export default Form;
