  const express = require('express');
    const bodyParser = require('body-parser');
    const dotenv = require('dotenv');

    dotenv.config();

    const app = express();
    const port = process.env.PORT || 3000; 
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
    res.send('Hello, World!');
    });

    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });