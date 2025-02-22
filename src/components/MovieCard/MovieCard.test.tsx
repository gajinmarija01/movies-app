import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from '.';

const defaultProps = {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imageUrl: 'https://example.com/inception.jpg',
    rating: 8.8,
};

describe('MovieCard', () => {
    it('renders the movie title', () => {
        render(<MovieCard {...defaultProps} />);
        expect(screen.getByText('Inception')).toBeInTheDocument();
    });

    it('renders the movie description', () => {
        render(<MovieCard {...defaultProps} />);
        expect(screen.getByText(/A thief who steals corporate secrets/i)).toBeInTheDocument();
    });

    it('renders the movie image', () => {
        render(<MovieCard {...defaultProps} />);
        const image = screen.getByAltText('Inception');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://example.com/inception.jpg');
    });

    it('renders the movie rating', () => {
        render(<MovieCard {...defaultProps} />);
        expect(screen.getByText('8.8/10')).toBeInTheDocument();
    });

    it('truncates long descriptions', () => {
        const longDescription = 'A'.repeat(200);
        render(<MovieCard {...defaultProps} description={longDescription} />);
        expect(screen.getByText(/A{150}\.\.\./)).toBeInTheDocument();
    });

    it('does not truncate short descriptions', () => {
        const shortDescription = 'Short description';
        render(<MovieCard {...defaultProps} description={shortDescription} />);
        expect(screen.getByText(shortDescription)).toBeInTheDocument();
    });
});