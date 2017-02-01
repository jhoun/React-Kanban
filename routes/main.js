const express = require('express');
const router = express.Router();
const db = require('../models');
const Card = db.Card;

router.route('/')
  .get((req, res) => {
    console.log('req: ', req);
    // // Project.findAll()
    // .then((project)  => {
    //   res.render('hello');
    // })
    // .catch((e) =>{
    //   console.error(e);
    //   res.json(e);
    // });
  })

module.exports = router;