const express = require('express')
const router = express.Router()
const HISTORYCONTROLLER = require('../controllers/HistoryController')
const BOOKMARKCONTROLLER = require('../controllers/BookmarkController')


//History Routes
router.post('/addhistory', HISTORYCONTROLLER.ADD_HISTORY)
router.get('/showhistory', HISTORYCONTROLLER.SHOW_HISTORY)

//Bookmark Routes
router.get('/showbookmark', BOOKMARKCONTROLLER.SHOW_BOOKMARK)
router.post('/addbookmark', BOOKMARKCONTROLLER.ADD_BOOKMARK)


module.exports = router