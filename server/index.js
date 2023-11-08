import express from 'express';
import Connection from './database/db.js';

const app = express();
const Port = 7000;

Connection();
app.listen(Port, () => {

    console.log(`Server is run on ${Port}`);
})