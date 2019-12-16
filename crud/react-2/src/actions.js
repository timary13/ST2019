import { fetch, fetchAdd, fetchRemove, fetchUpdate, fetchFind  } from './fetch';

export const ADD_DATA = 'ADD_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';
export const ADD_SOME_DATA = 'ADD_SOME_DATA';


export function findData (value) {
    return (dispatch) => {
        fetchFind(value).then((data) => {
            dispatch(addSomeData(data));
        });
    }
}

export function updateData (id, value) {
    return (dispatch) => {
        fetchUpdate(id, value).then(() => {
            dispatch(fetchData());
        });
    }
}

export function addData (values) {
    return (dispatch) => {
        fetchAdd(values).then(() => {
            dispatch(addDataStore(values));
        });
    }
}

export function removeData (value) {
    console.log('id ' + value.id);
    return (dispatch) => {
        fetchRemove(value).then(() => {
            dispatch(removeDataStore(value));
        });
    }
}

function removeDataStore(id) {
    return {
        type: REMOVE_DATA,
        payload: id
    }
}

function addDataStore (values) {
    return {
    	type: ADD_DATA,
    	payload: values
    }
}

export function addSomeData (someData = []) {
	return {
		type: ADD_SOME_DATA,
		payload: someData,
	}
}

export function fetchData () {
	return (dispatch) => {
		fetch().then((data) => {
            dispatch(addSomeData(data));
        });
	}
}


