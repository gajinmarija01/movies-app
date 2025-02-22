import { Card, CardContent, Typography, Box, Rating } from '@mui/material';

// could be handled with styled components approach
const imageBoxSx = {
    width: '120px',
    minWidth: '120px',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '15px',
    marginRight: 2,
}

const cardSx = {
    display: 'flex',
    borderRadius: '15px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 8px 40px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
    },
}

const titleSx = { fontWeight: 'bold', marginBottom: 1 }

const cardContentSx = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }

const contentSx = { display: 'flex', alignItems: 'center', marginBottom: 1 }

const ratingSx = {
    marginRight: 1,
    fontSize: '1.5rem',
    color: '#fbc02d',
}

const descriptionSx = { marginTop: 1 }

interface MovieCardProps {
    title: string;
    description: string;
    imageUrl: string;
    rating: number;
}

const MovieCard = ({ title, description, imageUrl, rating }: MovieCardProps) => {
    return (
        <Card sx={cardSx}>
            <Box
                component="img"
                src={imageUrl}
                alt={title}
                sx={imageBoxSx}
            />
            <CardContent sx={cardContentSx}>
                <div>
                    <Typography variant="h6" sx={titleSx}>
                        {title}
                    </Typography>
                    <Box sx={contentSx}>
                        <Rating
                            value={rating}
                            precision={0.1}
                            readOnly
                            max={10}
                            sx={ratingSx}
                        />
                        <Typography variant="body2" color="text.secondary">
                            {`${rating}/10`}
                        </Typography>
                    </Box>
                </div>
                <Typography variant="body2" color="text.secondary" sx={descriptionSx}>
                    {description.length > 150 ? description.substring(0, 150) + '...' : description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
