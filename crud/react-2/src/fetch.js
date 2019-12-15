import axios from 'axios';
const ENDPOINT_URL = 'http://localhost:3001/api/v1/things/';

export function  fetch() {
	return new Promise(async (resolve) => {
        const { data: posts } = await axios.get(ENDPOINT_URL);
        resolve(posts);
	});
}

export function fetchAdd(values) {
    return new Promise(async (resolve) => {
        await axios.post(ENDPOINT_URL, values);
        resolve();
    });
}

export function fetchRemove(value) {
    return new Promise(async (resolve) => {
        await axios.delete(ENDPOINT_URL + '/' + value.id);
        resolve();
    });
}

export function fetchUpdate(id, value) {
    return new Promise(async (resolve) => {
        await axios.put(ENDPOINT_URL + '/' + id, value);
        resolve();
    });
}

export function fetchFind(value) {
    return new Promise(async (resolve) => {
        const { data: post } = await axios.get(ENDPOINT_URL + '/' + value.id);
        resolve(post);
    });
}
