import { getWords } from '../../services/ConvertService';

describe('Fetching words', () => {
    it('should return all permutations of words', async () => {
        const data = await getWords({
            queryKey: ['getWords', { number: '23', filter: false }],
        });

        expect(data).toEqual([
            'ad',
            'ae',
            'af',
            'bd',
            'be',
            'bf',
            'cd',
            'ce',
            'cf',
        ]);
    });

    it('should return only real english words', async () => {
        const data = await getWords({
            queryKey: ['getWords', { number: '2337', filter: true }],
        });

        expect(data).toEqual(['adds', 'beds', 'beep', 'beer', 'bees']);
    });

    it('should return empty array', async () => {
        const data = await getWords({
            queryKey: ['getWords', { number: '34244', filter: true }],
        });

        expect(data).toEqual([]);
    });
});
