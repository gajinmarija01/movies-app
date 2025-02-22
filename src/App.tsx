
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomePage from './pages/HomePage';
import { Box } from '@mui/material';

const boxSx = {
  padding: '6.25rem',
  display: 'grid',
  gap: '1.25rem',
  placeItems: 'center',

};
// Create a client instance for React Query
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={boxSx}>
        <HomePage />
      </Box>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
