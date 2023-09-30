const express = require('express')
const bodyParser = require('body-parser')
const connection = require("./db")
require('dotenv').config()
require('./db.js')


const app = express()

const port = process.env.PORT || 3000;

const userRouter = require("./routers/UserRouter.js")
const gameRouter = require("./routers/GameRouter.js")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/games", gameRouter);

app.get("/", (req, res) =>{
    res.json("Teste");
})


connection(connection =>{
    app.listen(port, () =>{
        console.log(`Server running on port ${port}`);
        console.log("conectado a base de dados");
    })
}).catch(err =>{
    if(err){
        console.log("não foi possivel conectao o servidor");
    }
})
