import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { fetchMovies } from '../services/movieApi';

// Custom hook to fetch movies based on page, limit, and query
export const useMovies = (page: number, limit: number, query: string) => {
    return useQuery(
        ['movies', page, limit, query],
        () => fetchMovies(page, limit, query),
        {
            keepPreviousData: true,
            onError: (error) => {
                toast.error(error instanceof Error ? error.message : 'Failed to load movies');
            },
        }
    );
};
