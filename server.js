//Chunk 1
const express = require('express');
const sendMail = require('./mail');
const app = express();
const log = console.log;
const PORT = 8080;

const path = require('path');


//Chunk 2
//Data Parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.post('/email' , (req,res) =>{
    /* console.log('Data:',req.body); */
    /* Сhunk 5 */
    const {subject , email , text} = req.body;
    sendMail(email,subject,text,function(err,data){
        if(err){
            res.status(500).json({message: 'Internal error'});
        }
        else{
            res.json({message: 'Email sent!'});
        }
    })
    res.json({message: ' Message Recieved'})
});

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.listen(PORT, () => {
    log('Server is starting on PORT', 8080);
})