import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieList from '.';

const mockMovies = [
    {
        id: '1',
        title: 'Movie 1',
        description: 'Description 1',
        imageUrl: 'http://example.com/image1.jpg',
        rating: 4.5,
    },
    {
        id: '2',
        title: 'Movie 2',
        description: 'Description 2',
        imageUrl: 'http://example.com/image2.jpg',
        rating: 3.5,
    },
];

describe('MovieList Component', () => {
    test('renders without crashing', () => {
        render(<MovieList movies={[]} />);
    });

    test('displays "No movies found." when there are no movies', () => {
        render(<MovieList movies={[]} />);
        expect(screen.getByText('No movies found.')).toBeInTheDocument();
    });

    test('renders a list of movies', () => {
        render(<MovieList movies={mockMovies} />);
        expect(screen.getByText('Movie 1')).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();
        expect(screen.getByText('Movie 2')).toBeInTheDocument();
        expect(screen.getByText('Description 2')).toBeInTheDocument();
    });

    test('renders the correct number of MovieCard components', () => {
        render(<MovieList movies={mockMovies} />);
        const movieCards = screen.getAllByTestId('movie-card');
        expect(movieCards.length).toBe(mockMovies.length);
    });
});