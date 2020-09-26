const express = require('express');
const loginBusiness = require('./APIs/loginBusiness');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://richrich:Admin123@cluster0.lua7i.mongodb.net/<dbname>?retryWrites=true&w=majority`,
                 {
                    useNewUrlParser: true, 
                    useUnifiedTopology: true,
                    useFindAndModify: false
                }
)
.then(console.log('connected'))
.catch((err)=>console.log('\n\nmongodb connection failed\n\n'))

const app = express();

app.use('/', express.static('public'));
/*
app.use('/loginFreelancer');
app.use('/loginBusiness', loginBusiness);
app.use('/registerFreelancer');
app.use('/registerBusiness');
app.use('/getProfiles');
*/
app.listen(8080, ()=>console.log('listening on port 8080'));