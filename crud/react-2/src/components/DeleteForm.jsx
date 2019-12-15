import React from 'react';
import useForm from 'react-hook-form';

export default function DeleteForm ({ submit }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (values, event) => {
        event.target.reset();
        submit(values);
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <legend>Delete data</legend>
            <label>ID</label>
            <input name="id" ref={register}></input>
            <input type="submit" value="Delete"></input>
        </fieldset>
    </form>;
}


