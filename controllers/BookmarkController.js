const History = require('../models/Bookmark');
const { connect } = require('mongoose');
const Bookmark = require('../models/Bookmark');

//Add to bookmark
const ADD_BOOKMARK = (req, res, next) => {


  const BOOKMARK = new Bookmark({
    videoName: req.body.videoName,
    videoURL: req.body.videoURL
  });
  Bookmark.find({videoURL:BOOKMARK.videoURL}).then(result => {
    if(result.length!=0){
      res.status(400).json({
        message: "Video already exist"
      });
    }
    else{
      BOOKMARK
      .save()
      .then(result => {
        console.log(result);
        res.status(200).json({
          BOOKMARK,
          message: "ajout question avec succées"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
    }
  })
  
}

//Show all bookmarks
const SHOW_BOOKMARK = (req, res, next) => {
  Bookmark.find()
    .then(bookmark => {
      res.status(200).json({
        bookmark,
        message: "success"



      })
    })
    .catch(error => {
      res.json({
        message: 'an error has occured!'
      })
    })
}


module.exports = {
  ADD_BOOKMARK, SHOW_BOOKMARK
}



