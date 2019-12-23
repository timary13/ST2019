import axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3001/api/v1/things/';

export async function fetch() {
    const {data: posts} = await axios.get(ENDPOINT_URL);
    return posts;
}

export async function fetchAdd(values) {
    const newItem = await axios.post(ENDPOINT_URL, values);
    return newItem.data;
}

export async function fetchRemove(id) {
    return await axios.delete(ENDPOINT_URL + '/' + id);
}

export async function fetchUpdate(id, value) {
    return await axios.put(ENDPOINT_URL + '/' + id, value);
}

export async function fetchFind(value) {
    const {data: post} = await axios.get(ENDPOINT_URL + '/' + value.title);
    return post;
}
