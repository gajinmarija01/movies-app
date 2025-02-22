// src/components/SearchBar.tsx

import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledSearchBar = styled(TextField)({
    borderRadius: '1.25rem',
    marginBottom: '1.25rem',
    '& .MuiOutlinedInput-root': {
        paddingLeft: '0.9375rem',
    },
});

interface SearchBarProps {
    query: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ query, handleSearch }: SearchBarProps) => {
    return (
        <StyledSearchBar
            label="Search movies..."
            variant="outlined"
            value={query}
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
