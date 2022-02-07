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
    //Ver todos los datos
    const [fiscalias, setFiscalias] = React.useState([])

    const handleClick = (e)=>{
        e.preventDefault()
        const fiscalia = {name, address, number}
        console.log(fiscalia)
        //Agregar Ruta Backend
        fetch("http://localhost:8080/fiscalia/add", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(fiscalia)
        }).then(()=>{
            console.log("Nueva Ficalia Agregada")
        })
    }

    React.useEffect(()=>{
        fetch("http://localhost:8080/fiscalia/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setFiscalias(result);
        }
    )},[])
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
                <Button variant="contained" onClick={handleClick}>Guardar</Button>
            </Paper>
            <h1>Fiscalías</h1>
            <Paper elevation={3} style={paperStyle}>
            {fiscalias.map(fiscalia=>(
                <Paper elevation={6} style={{margin: "10px", padding:"15px", textAlign:"left"}} key={fiscalia.id}>
                <h4>Nombre: </h4>{fiscalia.name}<br/>
                Dirección: {fiscalia.address}<br/>
                Número: {fiscalia.number}<br/>
                </Paper>
            ))}
            </Paper>
        </Box>
    );
}
