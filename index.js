import express from 'express';

const app = express();

app.listen(5000, () => console.log("API is running on port 5001"));

app.get('/', (req, res) => res.json('The API is running.'))