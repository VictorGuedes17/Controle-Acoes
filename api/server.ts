import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello World'))

app.listen(3333, ()=>console.log('Running on port 3333'))