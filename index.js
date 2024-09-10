const express = require('express');
const app = express();
const port = 5000; // Puerto donde el contenedor expondrá la aplicación

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

// Ruta /clientes
app.get('/clientes', (req, res) => {
  res.json([
    { id: 1, nombre: 'Maria Espinoza Mendez' },
    { id: 2, nombre: 'Juan Valdez Arriola' },
    { id: 3, nombre: 'Cielo Martinez Diaz' }
  ]);
});

// Ruta /productos
app.get('/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Pelota' },
    { id: 2, nombre: 'Carrito' },
    { id: 3, nombre: 'Monopolio' }
  ]);
});

app.listen(port, () => {
  console.log(`App ejecutándose en el puerto ${port}`);
});
