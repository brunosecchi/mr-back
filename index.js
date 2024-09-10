const express = require('express');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const port = 3000;

app.listen(port, () => {
    console.log("Ouvindo na porta: " + port);
});