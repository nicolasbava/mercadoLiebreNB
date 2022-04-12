const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public/');
app.use(express.static(publicPath))

console.log(publicPath)

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})

/* RUTEO */

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})


/* PARA PONER A CORRER LA APP MANDAR EL COMANDO 'node app.js' o 'nodemon app.js' Y EMPIEZA A CORRER EL SERVIDOR EN EL PUERTO 3000 */