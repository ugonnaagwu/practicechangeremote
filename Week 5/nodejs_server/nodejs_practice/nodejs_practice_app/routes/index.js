var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/home", (req, res) => {
  res.json({ message: "The home endpoint has been hit." });
});

router.post("/submit", (req, res) => {
  var name = req.body.name
  console.log("Entered Name: " + name)
  res.json({message: "Your response has been submitted with name: " + name})
  res.end()
})

module.exports = router;
