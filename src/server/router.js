const express = require('express');
const Rest = require('./models/rest');
const Reviews = require('./models/reviews');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send({ test: 'test' });
});


router.post('/allRests', async function (req, res, next) {
  let rest = await Rest.find();
  console.log(">>>>>>>>>>>>")
  res.json(rest)
});

router.post('/addReview', async function (req, res, next) {
  let response = req.body;
  console.log(response)
  let rest = await Reviews.find();
  console.log(">>>>>>>>>>>>")
  res.json(rest)
});



module.exports = router;