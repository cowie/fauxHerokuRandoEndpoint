var express = require('express');
var router = express.Router();

const intBoundMin = 1;
const intBoundMax = 50;
const dollarBoundMin = 5;
const dollarBoundMax = 100;
const minimumDateYr = 2019;
const minimumDateMo = 1;
const minimumDateDay = 1;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getFauxProductData', function(req, res, next){
  const valueSets = req.query.quantity;
  /*[
    {
      integerValue: '',
      dateTimeValue:'',
      dollarValue:'',
    },
  ]*/
  const returnList = [];
  for(let x=0;x<valueSets;x++){
    const valueObj = {};
    valueObj.integerValue = Math.floor(Math.random() * intBoundMax) + intBoundMin;
    valueObj.dollarValue = Math.floor(((Math.random() * dollarBoundMax) + dollarBoundMin)* 100) / 100;
    valueObj.dateTimeValue = randomDate(new Date(minimumDateYr, minimumDateMo, minimumDateDay), new Date());
    returnList.push(valueObj);
  }
  //res.send(200);
  res.json(returnList);
});

function randomDate(start, end){
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = router;
