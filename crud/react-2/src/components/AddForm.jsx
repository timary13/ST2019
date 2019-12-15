import React from 'react';
import useForm from 'react-hook-form';

export default function AddForm ({ submit }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (values, event) => {
        event.target.reset();
        submit(values);
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <legend>Add new data</legend>
            <label>Title</label>
            <input name="title" ref={register}></input>
            <label>Body</label>
            <input name="body" ref={register}></input>
            <input type="submit" value="Add"></input>
        </fieldset>
    </form>;
}


