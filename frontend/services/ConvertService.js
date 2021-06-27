import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
});

export async function getWords(number) {
    const response = await instance.get('/convert', { params: { number } });
    return await response.data;
}
