const express = require('express');
const router = express.Router();
const db = require('../models');
const Card = db.Card;

router.route('/')
  .get((req, res) => {
    Card.findAll()
    .then((card)  => {
      res.json(card);
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
      .then((card) =>{
        res.json(card)
      })
      .catch((e) =>{
        whichError(e.errors[0].message, req);
       res.redirect('/portfolio/new');
      });
  });


//id page
router.route('/:id')
  .get((req,res) => {
    Card.findAll({
      where: {
        id : req.params.id
      }
    })
    .then((card) => {
      res.json(card)
    })
    .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  })
  .put((req, res) => {
    Card.update({
      title: req.body.title,
      priority:req.body.priority,
      status: req.body.status,
      createdBy: req.body.createdBy,
      assignedTo: req.body.assignedTo
    } , {
      where: {
        id : req.params.id
      }
    })
    .then((card) => {
      res.json(card)
    })
    .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  })
  .delete((req, res) => {
    Card.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((card) => {
      res.json(card)
    })
     .catch((e) =>{
        console.error(e);
        res.json(e);
      });
  });

module.exports = router;