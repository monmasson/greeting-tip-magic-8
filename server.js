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



    
server.get("/routes/greeting", (req, res)=>{
    res.status(200).json({message: 'Hello stranger!'})
})

//server.get("/routes/greetingRouter/.name.", (req, res)=>{
//    res.status(200).json({message: 'Hello' + req.params.greetingRouter})
//})

server.param('name', function(req, res, next, name) {
   //const modified = name;
  
    req.name = name;
    next();
  });
server.get('/routes/greeting/:name', function(req, res) {
    res.send('Wow! Hello there ,' + req.name );
  });

// THis displays the tip questiom
  server.get("/tip", (req, res)=>{
    res.status(200).json({message: 'how much your tip will be'})
})

//Calculate tip
server.get('/tip/:total/:percent', (req, res) => {
    let Total = req.params.total;
    let Percent = req.params.percent;
    const Totaltip = (Total/100)*Percent;
    res.send('Your tip would be ' + '$' + Totaltip );
    })

//Magic Ball answer
server.get('/magic/:name', (req, res) => {
    let answers = [ "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."];
  let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  res.send( randomAnswer );
   });

// server.get('/routes/greeting/:name', function(req, res) {
  //   res.send('Wow! Hello there ,' + req.name );
   //});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})

//EXPORTS GO HERE
module.exports=greetingRouter