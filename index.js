var subjects = require('./subjects.json');
const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    console.log('/ is called.')
    res.send('Hello, from Registration_System');
});

app.get('/subjects', (req, res) => {
    console.log('/subject is called.');
    res.send(subjects);
});

app.listen(port, () => console.log(`Registration_System_Server is listening on port ${port}`));