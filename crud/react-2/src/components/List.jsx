import React from 'react';
import Item from './Item';

export default function List({ values, remove, update }) {
    const dataItems = values
        .map(value =>
            <li key={value._id}>
                <Item value={value} remove={remove} update={update}/>
            </li>
        );
    return <ul>
        {dataItems}
    </ul>;
}

