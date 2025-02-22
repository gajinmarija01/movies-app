import axios from 'axios';

const BASE_URL = 'https://november7-730026606190.europe-west1.run.app';

export const fetchMovies = async (page: number, limit: number, query: string) => {
    try {
        const skip = (page - 1) * limit;

        const { data } = await axios.get(`${BASE_URL}/movies`, {
            params: {
                skip: skip,
                limit: limit,
                query: query
            }
        });
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};
