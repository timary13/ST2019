import { fetch, fetchAdd, fetchRemove, fetchUpdate } from './fetch';

export const ADD_DATA = 'ADD_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';
export const ADD_SOME_DATA = 'ADD_SOME_DATA';


export function updateData (id, value) {
    return (dispatch) => {
        fetchUpdate(id, value).then(() => {
            dispatch(fetchData());
        });
    }
}

export function addData (values) {
    return (dispatch) => {
        fetchAdd(values).then((item) => {
            dispatch(addDataStore(item));
        });
    }
}

export function removeData (id) {
    return (dispatch) => {
        dispatch(removeDataStore(id));
        fetchRemove(id).then(() => {
            dispatch(removeDataStore(id));
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

export function preloadData (data) {
    console.log(data);
	return (dispatch) => {
        dispatch(addSomeData(data));
	}
}


export function fetchData () {
    return (dispatch) => {
        fetch().then((data) => {
            dispatch(addSomeData(data));
        });
    }
}

