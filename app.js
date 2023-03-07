//*1. framework que facilita la creación de apis con node.js (marco de trabajo que permite crear una api estándar)
const express = require('express');
//*2. motor de base de datos.(para trabajar con mysql use el lenguaje sql y el programa mysql workbench)
const mysql = require('mysql');
//*3. es un paquete que importa al código las variables de entorno (.env) de la carpeta raíz.
const dotenv = require('dotenv');
//*4. mecanismo que restringe, toca cuestiones de seguridad.
const cors = require('cors');

//*Funcionamiento de express
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
//*utilizando cors
app.use(cors());
//*configurando dotenv
dotenv.config();
//*trabajando con mysql, creando la conexión.
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
//* añadiendo los datos del usuario a mysql.
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
//*verificando que los datos del usuario se encuentren en mysql.
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
//*llamando al puerto 3000 (cortesía de express)
app.listen(3000)

