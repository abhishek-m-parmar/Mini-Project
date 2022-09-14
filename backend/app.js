require('dotenv').config()
const bcrypt = require('bcrypt');
const express = require('express');
const route = express.Router();
var bodyParser = require('body-parser');
// const { Client } = require('pg');
const client = require('./Database/Database')

// const client = new Client({
//   user: 'myusername',
//   host: '0.0.0.0',
//   database: 'Mini-project',
//   password: 'mypassword',
//   port: 5432,
// });

const app = express();
app.use(bodyParser.json());


app.post('/student/studentregistration',(req,res)=>{
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var institute = req.body.institute;
    var enrollmentno = req.body.enrollmentno;
    var username = req.body.username;
   
    const  password =  bcrypt.hash(req.body.password,25) 
    console.log(password);
    client.connect()
    client.query('CREATE TABLE IF NOT EXISTS STUDENT(username varchar(40) NOT NULL UNIQUE,firstname varchar(30),lastname varchar(30),institute varchar(40),enrollmentNO varchar(30),password varchar(200))',(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log("query runnning succesfull");
        }
    })


    client.
    query(`INSERT INTO STUDENT VALUES('${username}','${firstname}','${lastname}','${institute}','${enrollmentno}','${password}')`)
    .then(res => {
        console.log("Value inserted suceess.")
    })
    .catch(err=>{
        console.log(err.message)
    })
    res.sendStatus()
    
    //which field
    //firstname
    //lastname
    //institute
    //password
    //enrollmentno
    //username

    

    

})









app.listen(process.env.PORT || 3000,()=>{
    console.log(`Your Server is running on ${process.env.PORT}`);
})