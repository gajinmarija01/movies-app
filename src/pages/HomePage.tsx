import { useCallback, useState } from 'react';
import { CircularProgress, Alert, Box, Typography } from '@mui/material';
import debounce from 'lodash.debounce';

import { useMovies } from '../hooks/useMovies';
import MovieList from '../components/MovieList';
import PaginationControls from '../components/PaginationControls';
import SearchBar from '../components/SearchBar';

const boxSx = {
    padding: '6.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
};

const HomePage = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [query, setQuery] = useState('');

    const { data, isLoading, isError, error, refetch } = useMovies(page, limit, query);

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            setQuery(value);
            setPage(1);
        }, 1000),
        [setQuery, setPage]
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        debouncedSearch(event.target.value);
    };

    if (isLoading) return <CircularProgress />;
    if (isError) {
        return (
            <>
                <Alert severity="error">{(error as Error).message}</Alert>
                <button onClick={() => refetch()}>Retry</button>
            </>
        );
    }

    return (
        <Box sx={boxSx}>
            <Typography variant="h4" gutterBottom>
                Movie List
            </Typography>
            <SearchBar query={query} handleSearch={handleSearch} />
            <MovieList movies={data?.items || []} />
            <PaginationControls page={page} numOfItems={data?.total} limit={limit} onPageChange={setPage} />
        </Box>
    );
};

export default HomePage;
