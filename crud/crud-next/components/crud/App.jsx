import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import List from './List';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';

import { addData, removeData, updateData, preloadData } from '../../src/actions';

function App ( { addData, preloadData, removeData, data, updateData, things } ) {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [id, setId] = useState('');

	useEffect(() => {
		preloadData(things);
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
	removeData,
	updateData,
	preloadData,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
