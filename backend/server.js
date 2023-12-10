const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

var messages = Array.from({ length: 4 }, (_, index) => {
    return "Message" + index;
});

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.get('/messages/:id', (req, res) => {
    const id = req.params.id
    const message = messages.at(id);
    console.log(message);
    res.send(message);
});

app.post('/messages', (req, res) => {
    let msg = req.body;

    console.log(msg);
    messages.push(msg.message);

    res.json(msg);
});

app.listen(
    port,
    () => console.log(`app running on http://localhost:${port}`)
);
