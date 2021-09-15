const mongoose = require('mongoose')
const Schema = mongoose.Schema

//History Model
const historySchema = new Schema({
    videoName: {
        type: String

    },
    videoURL: {
        type:String

    },
}, { timestamps: true })

const HISTORY = mongoose.model('History', historySchema)
module.exports = HISTORY

 