import express from 'express';
import {createWebSocket} from './message-utility.js';


const app = express();
const PORT = 3000;

createWebSocket();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
