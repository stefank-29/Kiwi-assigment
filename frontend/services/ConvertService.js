import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export async function getWords(number) {
    const response = await instance.get('/convert', { params: { number } });
    return response.data;
}
