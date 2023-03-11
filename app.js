// load
const express = require('express')

const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.send("hello roooot")
})

app.get("/user", (req, res) => {
    let userList = [
        {
            "id": 1,
            "name": "Alice",
            "sex": "F"
        },
        {
            "id": 2,
            "name": "Bob",
            "sex": "M"
        },
        {
            "id": 3,
            "name": "Charlie",
            "sex": "M"
        },
        {
            "id": 4,
            "name": "Diana",
            "sex": "F"
        },
        {
            "id": 5,
            "name": "Eve",
            "sex": null
        }
    ]
    res.json(userList)

    // res.send("user list")
})

app.listen(3003, () => {
    console.log("listen...")

})