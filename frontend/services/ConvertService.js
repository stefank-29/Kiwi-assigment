import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 20000,
});

export async function getWords({ queryKey }) {
    const { number, filter } = queryKey[1];
    try {
        const response = await instance.get('/convert', {
            params: { number, filter },
        });
        return response.data;
    } catch (error) {
        return null;
    }
}
