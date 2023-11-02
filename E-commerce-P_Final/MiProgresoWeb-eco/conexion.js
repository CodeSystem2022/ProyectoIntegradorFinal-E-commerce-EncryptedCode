let mysql = require('mysql');

let conexion = mysql.createConnection({
    host: "localhost",
    database: "clientes",
    user: "root",
    password: ""
})

conexion.connect((err) =>{
    if(err){
        throw err;
    }else {
        console.log("conexion exitosa");
    }
})
