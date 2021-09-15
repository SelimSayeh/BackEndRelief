const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyparser = require("body-parser")

const userRoute = require('./routes/User')
const userController = require("./controllers/HistoryController")


mongoose.connect("mongodb+srv://selim:selimsayeh98@project.q4a5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => {
	console.log(err)
})
db.once('open', () => {
	console.log('Database connection established')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const PORT = 8000
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}  `)
})


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api', userRoute)