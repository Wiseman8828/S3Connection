const express = require('express');
const bodyParser = require('body-parser');
const { getPatientDetails } = require('./util-method/getS3File');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send(`<h3>Server is running on Port: ${PORT}</h3>`)
})

app.get('/patientDetails', async (req, res) => {
    console.log('working')
    res.send('hey working')
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
