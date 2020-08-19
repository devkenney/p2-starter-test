const express = require('express');
const router = express.Router();
const Vegetable = require("../models/veggies.js");
const Fruit = require('../models/fruits.js');

// Index
router.get('/', (req, res) => {
  Vegetable.find({}, (error, allVeggies) => {
    res.render('veggies/Index', {
      veggies: allVeggies
    });
  })
});

// New
router.get('/new', (req, res) => {
  res.render('veggies/New');
});

// Destroy
  router.delete('/:id', (req, res) => {
    Vegetable.findByIdAndRemove(req.params.id, (error, vegetable) => {
      res.redirect('/veggies');
    })
  })

// Update
router.put('/:id', (req, res) => {
  req.body.isGreen = req.body.isGreen === "on" ? true : false;

  Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updateModel) => {
    res.redirect('/veggies');
  });
});

// Create
router.post('/', (req, res) => {
  if (req.body.isGreen === "on") {
      req.body.isGreen = true;
  } else {
      req.body.isGreen = false;
  }
  // Use Model to create Vegetable Document
  Vegetable.create(req.body, (error, createdFruit) => {
      // Once created - respond to client
      res.redirect('/veggies');
  });
});

// Edit
router.get('/:id/edit', (req, res) => {
  Vegetable.findById(req.params.id, (error, foundVegetable) => {
    res.render('veggies/Edit', {
      vegetable: foundVegetable
    });
  });
});

// Show
router.get('/:id', (req, res) => {
  Vegetable.findById(req.params.id, (error, foundVegetable) => {
    res.render('veggies/Show', {
      vegetable: foundVegetable
    });
  });
});

// export router
module.exports = router;