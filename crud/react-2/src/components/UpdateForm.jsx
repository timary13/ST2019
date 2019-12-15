import React, {useState} from 'react';
import useForm from 'react-hook-form';
import {fetchFind} from "../fetch";

const ENTER = 13;

export default function UpdateForm({ submit }) {
    const {register, handleSubmit, setValue} = useForm();
    const [id, setId] = useState('');

    const onSubmit = (values, event) => {
        event.target.reset();
        submit(id, values);
        setId('');
    };

    const onChanging = (event) => {
        setId(event.target.value);
    };

    const onEntering = async (event) => {
        if (event.keyCode === ENTER) {
            event.preventDefault();
            event.target.value = '';

            fetchFind({"id": id}).then((post) => {
                setValue('title', post[0].title);
                setValue('body', post[0].body);
            });
        }
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <legend>Update data</legend>
            <label>ID</label>
            <input name="id" onChange={onChanging} onKeyDown={onEntering}></input>
            <label>Title</label>
            <input name="title" ref={register}></input>
            <label>Body</label>
            <input name="body" ref={register}></input>
            <input type="submit" value="Update"></input>
        </fieldset>
    </form>
    );
}


