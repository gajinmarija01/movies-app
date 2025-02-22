import { Box, Button, Typography } from '@mui/material';

const boxSx = { marginTop: '1.25rem', display: 'flex', alignItems: 'center' }

const buttonSx = { borderRadius: '1.25rem', marginRight: '0.625rem', padding: '0.5rem 1rem' }

interface PaginationControlsProps {
    page: number;
    onPageChange: (newPage: number) => void;
    numOfItems: number;
    limit: number;
}

const PaginationControls = ({ page, onPageChange, numOfItems, limit }: PaginationControlsProps) => {
    const totalPages = Math.ceil(numOfItems / limit);

    return (
        <Box sx={boxSx}>
            <Button
                variant="contained"
                onClick={() => onPageChange(Math.max(page - 1, 1))}
                disabled={page === 1}
                sx={buttonSx}
            >
                Previous
            </Button>

            <Typography variant="body1" sx={{ marginRight: '0.625rem' }}>
                Page {page} of {totalPages}
            </Typography>

            <Button
                variant="contained"
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages || numOfItems < limit}
                sx={buttonSx}
            >
                Next
            </Button>
        </Box>
    );
};

export default PaginationControls;
