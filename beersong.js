const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const server = express()
const PORT = process.env.PORT || 5001



server.use(express.json())
server.use(bodyParser.json())
server.use(morgan("dev"))


server.get("/", (req, res) => {
    let counter = 99
    res.status(200).json({ message: `${counter} Bottles of beer on the wall` })

})

server.get("/multiple/:bottleNumber", (req, res) => {
    let counter = 99 - 1
    let bottleNumber = req.params.bottleNumber
    let numberBottles = bottles(bottleNumber)
    res.status(200).json({ message: numberBottles, link: `localhost:5000/${bottleNumber - 1}` })
})


function bottles(num) {
    let numberBottles = []

    for (let counter = num; counter >= 1; counter--) {
        numberBottles.push(counter + " bottles of beer on the wall. " + counter + " bottles of beer. Take one down. Pass It Around." + (counter - 1) + " bottles of beer on the wall")
    }
    return numberBottles
}
server.get("/single/:singleNumber", (req, res) => {
    let counter = 99 - 1
    let singleNumber = req.params.singleNumber
    res.status(200).json({
        message: singleNumber + " bottles of beer on the wall. " + singleNumber + " bottles of beer. Take one down. Pass It Around." + (singleNumber - 1) + " bottles of beer on the wall", link: `localhost:5000/${singleNumber - 1}`
    })
})
server.listen(PORT, () => {
    console.log(`Server is listening at: ${PORT}`)
})