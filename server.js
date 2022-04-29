//IMPORTS GO HERE
const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const greetingRouter = require("./Routes/greetingRouter")
const res = require("express/lib/response")



const PORT = process.env.PORT || 5000

//Middleware goes here
/**
 * Middleware - Ware that goes in the middle
 * REUSABLE!!!
 * Some kind of function/method that occurs 
 * BEFORE code hits your endpoints
 */
server.use(express.json())
server.use(bodyParser.json())


//server.use("/greeting", greetingRouter)

// Routes go Here



    
server.get("/routes/:greetingRouter", (req, res)=>{
    res.status(200).json({message: 'Hello stranger!'})
})

server.get("/routes/greetingRouter/.name.", (req, res)=>{
    res.status(200).json({message: 'Hello' + req.params.greetingRouter})
})



server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})

//EXPORTS GO HERE
module.exports=greetingRouter