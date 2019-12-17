import React from 'react';
import useForm from 'react-hook-form';

export default function UpdateForm({ submit, load }) {
    const {register, handleSubmit, setValue} = useForm();

    setValue('title', load.title);
    setValue('body', load.body);


    const onSubmit = (values, event) => {
        if(!load.id) {
            return;
        }
        event.target.reset();
        submit(load.id, values);
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <legend>Update data</legend>
            <label>Title</label>
            <input name="title" ref={register({required: true})}></input>
            <label>Body</label>
            <input name="body" ref={register({required: true})}></input>
            <input type="submit" value="Save"></input>
        </fieldset>
    </form>
    );
}
