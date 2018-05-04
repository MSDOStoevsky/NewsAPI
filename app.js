#! /
/*
 * Dylan Lettinga
 * 12/16/2017
 */
var express = require('express');
var cors = require('cors');
var scrape = require('./scrape.js');

var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

/** 
 * GET request to /api/get/clients/:clientid
 * returns client with further detail as JSON
 * */
app.get('/NR/:year/:month', function (req, res) {
    console.log("[200] " + req.method + " to " + req.url);
    scrape.site('https://www.nationalreview.com/'+req.param.year+'/'+req.param.month);
});

/** 
 * POST request to /api/get/links
 * returns status as JSON
 * */
app.post('/DW/', function (req, res) {
    console.log("[200] " + req.method + " to " + req.url);
    scrape.site('https://www.dailywire.com/news/');
});

var server = app.listen(7819, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server started at http://%s:%s", host, port);
})