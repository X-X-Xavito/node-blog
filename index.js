
var Post = require('./model/blogPost');

var fs = require('fs');
var data = fs.readFileSync('articles.json');
var words = JSON.parse(data);
//console.log(words);

//calling the express object and defining it to a new variable.
var express = require('express');
var app = express();

//checking if the server is running
console.log('server is starting');

//start the server to the localhost port 3000
var server = app.listen(3000, function(){
	console.log('listening....');
});


//route to get all the articles
app.get('/all', function(req, resp){
	resp.send(words);
});


/*
app.post('/blog-posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.json(201, post)
  })
})
*/