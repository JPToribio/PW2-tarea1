const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
    console.log('Hola, compañero del IUPA!');
    response.send('Hola, compañeros del IUPA!');

});

app.listen(PORT, () => {
    console.info(`Escuchando en puerto ${PORT}`);
});

