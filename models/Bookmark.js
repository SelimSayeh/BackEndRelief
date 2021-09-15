const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Bookmark Model

const BookmarkSchema = new Schema({
    videoName: {
        type: String

    },
    videoURL: {
        type:String
    },
}, { timestamps: true })

const BOOKMARK= mongoose.model('Bookmark', BookmarkSchema)
module.exports = BOOKMARK

 