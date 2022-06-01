const express = require('express');
const app = express();
const PORT = 42069;

const rappers = {
    '21 savage': {'age':29,
    'birthName':'Sheyaa Bin Abraham-Joseph',
    'birthLocation':'London,England',
    },
    'chance the rapper': {
        'age':29,
        'birthName':'Chancelor Bennett',
        'birthLocation':'Chicago,Illinois'
    },
    'dylan': {
        'age':29,
        'birthName':'Dylan',
        'birthLocation':'Dylan, Dylan'
    }
}

app.get('/', (req,res) => { //our route is '/'
    res.sendFile(__dirname + '/index.html'); //dirname is rap_names_api, and it will look for index.html;
})

app.get('/api/:rapperName', (req,res) => {
    const rappersName = req.params.rapperName.toLowerCase();
    if(rappers[rappersName]) {
        res.json(rappers[rappersName]);
    } else {
        res.json(rappers['dylan'])
    }
})

app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}`);
})