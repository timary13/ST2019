import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import List from './List';
import AddForm from './AddForm';
import DeleteForm from './DeleteForm';
import FindForm from './FindForm';
import UpdateForm from './UpdateForm';

import { addData, fetchData, removeData, updateData, findData } from '../actions';

function App ({ addData, removeData, fetchData, data, findData, updateData }) {
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return <div>
		<AddForm submit={(data) => addData(data)} />
		<DeleteForm submit={(data) => removeData(data)} />
		<FindForm submit={(data) => findData(data)} />
		<UpdateForm submit={(id, data) => updateData(id, data)}/>
		<List values={data}/>
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
	findData,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);















