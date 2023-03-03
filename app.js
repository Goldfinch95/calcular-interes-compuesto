const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("MySQL connected!");
    }
})

app.post('/register/login',(req,res)=>{
    const {name, email, user, password} = req.body
    const add = `INSERT INTO users(name, email, user, password)VALUES ("${name}", "${email}", "${user}", "${password}");`
    db.query(add, (error,results,fields)=>{
        if(error){
            return res.status(400).send({message:'unregistered user'});
        }
        else{
            console.log(results);
            res.status(200).send({message:'registered user'});
        }
    })
})

app.post('/verify/login', (req, res) =>{
    const {email, password} = req.body
    const verify = `SELECT * FROM users WHERE email = "${email}" and password = "${password}";`
    db.query(verify,(error, results, fields) => {
        if(results.length < 1 ){
          return res.status(400).send({message:'The user is NOT in the database'});
        }
        else{
          console.log(results);
              res.status(200).send({message:'The user is in the database'});
        }
      })
})

app.listen(3000)

