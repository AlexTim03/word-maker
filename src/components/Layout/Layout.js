import { Container, Box } from '@mui/material'
import { Header } from './Header'

export const Layout = ({ children }) => (
    <Box sx={{ bgcolor: '#eceff1', height: '100vh' }}>
        <Container maxWidth='xs' disableGutters sx={{ bgcolor: '#e1f5fe', height: '100vh' }}>
            <Header />
            <Box sx={{ p: 1 }}>
                {children}
            </Box>
        </Container>
    </Box>
)