const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Equipo: Barrón Guzmán María Fernanda - Cruz Melchor David - Gloria Alvarez Luis David</h1>
    <h2>Equipo 6 - Proyecto #4</h2>
    <p>Hola mundo :3</p>
  `);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
