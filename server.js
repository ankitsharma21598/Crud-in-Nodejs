const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path=require("path");

const app = express();

dotenv.config({path:'config.env'});

const PORT = process.env.PORT||8080;

// log requests
app.use(morgan('tiny'));

// parse request to body
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))

// load assets in http server
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

app.get('/',(req,res)=>{
    // res.send("Crud Application");
    res.render('index');
});

app.get('/add_user',(req,res)=>{
    // res.send("Crud Application");
    res.render('add_user');
});


app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});