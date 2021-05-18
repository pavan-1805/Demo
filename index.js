const express = require('express');
const routes = require('./routes/UserRoutes');
const mongoose = require('mongoose')


const app = express();



    mongoose.connect('mongodb+srv://pavan:pavan@cluster0.01lqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const conn = mongoose.connection
    conn.on('open',()=>{
        console.log("Connected");
    })
    
app.use(express.json())

app.use('/users',routes)



// app.get('/api',function(req,res){
//     console.log('get request');
//     res.end();
// })

const PORT = 8080;

app.listen( PORT , () =>{
    console.log(`port: ${PORT} is now enable to listen requests `);
})