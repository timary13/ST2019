import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import List from './List';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';

import { addData, fetchData, removeData, updateData } from '../actions';

function App ({ addData, removeData, fetchData, data, updateData }) {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [id, setId] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	const setReadForm = (data) => {
		setBody(data.body);
		setTitle(data.title);
		setId(data._id);
	};

	return <div>
		<AddForm submit={(data) => addData(data)} />
		<UpdateForm load={{title,body,id}} submit={(id, data) => updateData(id, data)}/>
		<List values={data} remove={(data) => removeData(data)} update={(data) => setReadForm(data)}/>
	</div>;
}

const mapStateToProps = (state) => ({
	data: state,
});

const mapDispatchToProps = {
	addData,
	fetchData,
	removeData,
	updateData,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
