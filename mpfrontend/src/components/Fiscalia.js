import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material/';

export default function Fiscalia() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    //Ingreso de variables
    const [name, setName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [number, setNumber] = React.useState('')
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, },
            }}
            noValidate
            autoComplete="off"
        >
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "#1B2668" }}>Ingreso de Fiscalias</h1>
                <TextField id="standard-basic" label="Nombre" variant="standard" fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br></br><br></br>
                <TextField id="standard-basic" label="Dirección" variant="standard" fullWidth
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                /><br></br><br></br>
                <TextField id="standard-basic" label="Número de teléfono" variant="standard" fullWidth
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                /><br></br><br></br>
                <Button variant="contained">Guardar</Button>
                {name}
                {address}
                {number}
            </Paper>

        </Box>
    );
}
