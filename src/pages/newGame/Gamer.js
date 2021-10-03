import { Box, TextField, ButtonGroup, IconButton } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const Gamer = () => {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: '5px' }} mt={1} >   
            <div>Игрок 1:</div>
            <TextField />
            <ButtonGroup variant="text" size="small">
                <IconButton ><AddIcon /></IconButton>
                <IconButton ><RemoveIcon /></IconButton>
                <IconButton ><ArrowDownwardIcon /></IconButton>
                <IconButton ><ArrowUpwardIcon /></IconButton>
            </ButtonGroup>
        </Box >
    )
}