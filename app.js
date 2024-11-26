const express = require('express');
const bodyParser = require('body-parser');
const { getPatientDetails } = require('./util-method/getS3File');
// const { Worker } = require('worker_threads');

const workerpool = require('workerpool');
const workerPool = workerpool.pool('./util-method/workerPool', { maxWorkers: 4 });

const app = express();
const PORT = process.env.PORT || 3000;

// const runWorker = (functionName, number) => {
//     return new Promise((resolve,reject)=>{
//         const worker = new Worker('./util-method/fibonacchi')
//         worker.postMessage({functionName, number})
//         worker.on('message',resolve)
//         worker.on('error', reject)
//         worker.on('exit', (code) => {
//             if (code !== 0) {
//               reject(new Error(`Worker stopped with exit code ${code}`));
//             }
//         });
//     })
// }

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send(`<h3>Server is running on Port: ${PORT}</h3>`)
})

app.get('/patientDetails', async (req, res) => {
    console.log('working')
    res.send('hey working')
});

app.get('/fibonacci/:number', async (req, res) => {
    let n = req.params.number
    // let result = await runWorker('fibonacci', n)
    let result = await workerPool.exec('calculateFibonacci', [n])
    res.json({result})
});

app.get('/factorial/:number', async (req, res) => {
    let n = req.params.number
    // let result = await runWorker('factorial', n)
    let result = await workerPool.exec('calculateFactorial', [n])
    res.json({result})
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});