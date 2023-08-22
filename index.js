import express from 'express';

const app = express();

app.get('/', (req, res) => res.json('The API is running.'));

app.listen(5001, () => console.log("API is running on port 5001"));

