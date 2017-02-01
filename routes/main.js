const express = require('express');
const router = express.Router();
const db = require('../models');
const Card = db.Card;

router.route('/')
  .get((req, res) => {
    Card.findAll()
    .then((project)  => {
      console.log('project: ', project);
      res.json('Here are all the cards');
    })
    .catch((e) =>{
      console.error(e);
      res.json(e);
    });
  })
  .post((req,res) => {
    Card.create({
      title: req.body.title,
      priority:req.body.priority,
      status: req.body.status,
      createdBy: req.body.createdBy,
      assignedTo: req.body.assignedTo
    })
      .then((project) =>{
        res.json("you've created a post")
      })
      .catch((e) =>{
        whichError(e.errors[0].message, req);
       res.redirect('/portfolio/new');
      });
  });

module.exports = router;