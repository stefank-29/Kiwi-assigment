// import { render, screen } from '../test-utils';
// import Home from '../../pages/index';
import { getWords } from '../../services/ConvertService';
import axios from 'axios';

describe('Fetching words', () => {
    it('should return words', async () => {
        //const words = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
        // const resp = { data: words };
        //axios.get.mockResolvedValue(resp);

        // axios.get.mockImplementationOnce(() => Promise.resolve(resp));

        const data = await getWords({
            queryKey: ['getWords', { number: '23', filter: false }],
        });
        console.log(data);
    });
});
