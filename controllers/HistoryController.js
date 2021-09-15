const History = require('../models/History');
const { connect } = require('mongoose');

//Add to History
const ADD_HISTORY = (req, res, next) => {


  const HISTORY = new History({
    videoName: req.body.videoName,
    videoURL: req.body.videoURL
  });
  HISTORY
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        HISTORY,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

//Show videos in history
const SHOW_HISTORY = (req, res, next) => {
  History.find()
    .then(history => {
      res.status(200).json({
        history,
      })
    })
    .catch(error => {
      res.json({
        message: 'an error has occured!'
      })
    })
}



module.exports = {
  ADD_HISTORY,SHOW_HISTORY
}



