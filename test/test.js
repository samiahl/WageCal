//converting csv with 'csvtojson'-module
var fs = require('fs');
var Converter = require('csvtojson').Converter;
var csvFileName = "./HourList201403.csv";


var csvConverter = new Converter({});

csvConverter.on('end_parsed', function(jsonObj) {
  console.log(jsonObj);
});

fs.createReadStream(csvFileName).pipe(csvConverter);
