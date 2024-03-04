const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

//using mysql running db on port 8081
//npm start should do a trick

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fate-servant-gacha'
})

// Connect to the database
db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
});


// some general fetch (dont care this)
app.get('/', (re, res)=>
{
    return res.json("Backend loaded")
})
app.get('/ce_data',(req, res)=> {
    const sql = "SELECT * FROM ce_data";
    db.query(sql, (err,data)=>{
        if (err)    return res.json(err);
        return res.json(data)
    })
})


app.get('/fate_servant_data',(req, res)=> {
    const sql = "SELECT * FROM fate_servant_data";
    db.query(sql, (err,data)=>{
        if (err)    return res.json(err);
        return res.json(data)
    })
})


//this for friend gacha
app.get('/ce_friend',(req, res)=> {
    const sql = "SELECT * FROM ce_data WHERE CE_Summon = 'Friend'";
    db.query(sql, (err,data)=>{
        if (err)    return res.json(err);
        return res.json(data)
    })
})
app.get('/servant_friend',(req, res)=> {
    const sql = "SELECT * FROM `fate_servant_data` WHERE Servent_Summon = 'Friend' OR Rarity = '1-Star' OR Rarity = '2-Star' OR Rarity = '3-Star'";
    db.query(sql, (err,data)=>{
        if (err)    return res.json(err);
        return res.json(data)
    })
})
app.get('/exp_friendpoint',(req, res)=> {
    const sql = "SELECT * FROM exp_friendpoint";
    db.query(sql, (err,data)=>{
        if (err)    return res.json(err);
        return res.json(data)
    })
})
app.get('/command_friendpoint',(req, res)=> {
    const sql = "SELECT * FROM command_friendpoint";
    db.query(sql, (err,data)=>{
        if (err)    return res.json(err);
        return res.json(data)
    })
})
app.get('/fou',(req, res)=> {
    const sql = "SELECT * FROM fou";
    db.query(sql, (err,data)=>{
        if (err)    return res.json(err);
        return res.json(data)
    })
})

app.get('/login',(req, res)=> {
    const sql = "SELECT * FROM fou";
    db.query(sql, (err,data)=>{
        if (err)    return res.json(err);
        return res.json("login success")
    })
})


app.listen(8081, ()=>
{
    console.log("listening in port 8081")
} 
)