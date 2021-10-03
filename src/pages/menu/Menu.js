import { useHistory } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material';

export const Menu = () => {

    const history = useHistory()

    const handleNew = () => history.push('/new')

    return (
        <>
            <Stack spacing={3} p={2}>
                <Button variant="outlined" onClick={handleNew}>
                    <Typography variant="h6" component="div" p={1}>
                        Новая игра
                    </Typography>
                </Button>
                <Button variant="outlined">
                    <Typography variant="h6" component="div" p={1}>
                        Восстановить игру
                    </Typography>
                </Button>
            </Stack>
        </>
    )
}