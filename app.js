const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();
var User = require('./Controllers/User');
var GetData = require('./Controllers/GetData');
const bluser = require('./Models/BlUser')
const { json } = require('express');
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;


app.use('/',User);

app.use('/getdata',GetData)     

function intervalFunc(){
    var today = new Date();
    if(today.getDay() == 1)
    {
        bluser.UpdateCurrentWeightAllUser();
        bluser.UpdateAllUsers();
    }
    else
    {
        console.log('This Is Not The Day!!!')
    }
}

// 86400000 one Day
setInterval(intervalFunc,10000);

app.listen(port, () => {
    console.log(`listen on port ${port}`);
});