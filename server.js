const express = require('express');
const login = require('./apis/login');
const profilePage = require('./apis/profilePage');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://richrich:Admin123@cluster0.lua7i.mongodb.net/freelancer?retryWrites=true&w=majority',
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(res=>console.log('connected'))
.catch(err=>console.log(err));
                


const app = express();

app.use('/', express.static('public'));
app.use(express.json());
app.use('/login', login);
app.use('/profilePage', profilePage);

app.listen(8080, ()=>console.log('server on'));