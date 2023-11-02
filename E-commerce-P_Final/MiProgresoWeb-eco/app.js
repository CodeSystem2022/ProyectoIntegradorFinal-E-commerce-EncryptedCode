const express = require('express');
const app = express();
const port = 5500; // El puerto se puede cambiar

app.use(express.static(__dirname)); // Sirve todos los archivos estáticos en la carpeta actual

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
});

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
