const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
    console.log("Server Started!")
    res.send('Hello neta')
}
)

app.listen(port, ()=>{
    console.log("Server is up")
})