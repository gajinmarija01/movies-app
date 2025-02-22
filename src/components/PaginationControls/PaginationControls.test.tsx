import { render, screen, fireEvent } from '@testing-library/react';
import PaginationControls from './PaginationControls';

describe('PaginationControls', () => {
    const onPageChangeMock = jest.fn();

    const renderComponent = (page: number, numOfItems: number, limit: number) => {
        render(
            <PaginationControls
                page={page}
                onPageChange={onPageChangeMock}
                numOfItems={numOfItems}
                limit={limit}
            />
        );
    };

    beforeEach(() => {
        onPageChangeMock.mockClear();
    });

    test('calls onPageChange with correct page number when next button is clicked', () => {
        renderComponent(1, 100, 10);
        fireEvent.click(screen.getByRole('button', { name: /next/i }));
        expect(onPageChangeMock).toHaveBeenCalledWith(2);
    });

    test('calls onPageChange with correct page number when previous button is clicked', () => {
        renderComponent(2, 100, 10);
        fireEvent.click(screen.getByRole('button', { name: /previous/i }));
        expect(onPageChangeMock).toHaveBeenCalledWith(1);
    });
});