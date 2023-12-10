const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT;
const serial = process.env.JWT_SERIALIZE;

app.use(cors());
app.use(bodyParser.json());


const l = str => console.log(str);

class Msg {
    constructor(obj = null){
        this.text = !obj ? null : obj.text ?? '';
        this.user = !obj ? null : obj.user ?? obj.username ?? null;
    }
}
class User{
    constructor(){
        this.id = null;
        this.username = null;
        this.password = null;
    }
}
class DisplayMessage{
    constructor(obj){
        this.text = obj.text;
        this.userId = obj.user;
        this.user = users.find(u => u.id == obj.user)?.username ?? 'NOT FOUND';
    }
}
class ConstructUser{
    constructor(obj){
        this.id = obj.id ?? null
        this.username = obj.user ?? obj.username ?? null;
        this.password = obj.password ?? obj.pass ?? null;
    }
    createUser(obj){
        this.id = obj.id ?? null
        this.username = obj.user ?? obj.username ?? null;
        this.password = obj.password ?? obj.pass ?? null;
        this.returnUser();
    }
    returnUser(){
        const user = new User();
        user.id = this.id;
        user.username = this.username;
        user.password = this.password;
        return user;
    }
}




var messages = Array.from({ length: 4 }, (_, index) => {
    const msg = new Msg();
    msg.text = "Message" + index;
    msg.user = 0;
    return msg;
});

var users = Array.from({ length: 1 }, (_, index) => {
    return new ConstructUser({ id: index, username: 'admin', password: 'admin' }).returnUser();
});

app.get('/messages', (req, res) => {
    const msgs = messages.map(msg => {
        if (!Number.isNaN(msg.user)) {
            return new DisplayMessage(msg);
        }
        return msg;
    });
    res.send(msgs);
});

app.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    const message = messages[id];
    res.send(message);
});

app.post('/messages', (req, res) => {
    const token = req.header('Authorization');
    const userId = jwt.decode(token, serial)
    let msg = new Msg();
    msg.user = userId;
    msg.text = req.body.message;
    messages.push(msg);
    res.json(new DisplayMessage(msg));
});

app.post('/register', (req, res) => {
    let registerData = req.body;
    const user = new ConstructUser(registerData).returnUser();
    user.id = users.push(user); 
    let token = jwt.sign(user.id, serial);
    res.json(token);
});
app.post('/login', (req, res) => {
    let loginData = req.body;
    const user = users.find(u => u.username == loginData.username); 
    if(!user){
        return res.status(401).send({message: 'user or password is not correct'})
    }
    if(user.password == loginData.password){

    }
    else{
        return res.status(401).send({message: 'name or password is invalid'});
    }
    l(user)
    let token = jwt.sign(user.id, serial);
    res.json(token);
});

app.listen(
    port,
    () => l(`app running on http://localhost:${port}`)
);