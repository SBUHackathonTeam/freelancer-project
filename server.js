const express = require('express');

const app = express();

app.use('/', express.static('public'));
app.use('/loginFreelancer');
app.use('/loginBusiness');
app.use('/registerFreelancer');
app.use('/registerBusiness');
app.use('/getProfiles');
app.listen(8080, ()=>console.log('listening on port 8080'));