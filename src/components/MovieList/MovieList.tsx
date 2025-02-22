import { Box, Typography } from '@mui/material';
import MovieCard from '../MovieCard';

const boxSx = {
    display: 'grid',
    gap: '1.25rem',
    marginTop: '1.25rem'
}

interface MovieListProps {
    movies: Array<{
        id: string;
        title: string;
        description: string;
        imageUrl: string;
        rating: number;
    }>;
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <Box sx={boxSx}>
            {movies.length ? (
                movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        description={movie.description}
                        imageUrl={movie.imageUrl}
                        rating={movie.rating}
                    />
                ))
            ) : (
                <Typography>No movies found.</Typography>
            )}
        </Box>
    );
};

export default MovieList;
