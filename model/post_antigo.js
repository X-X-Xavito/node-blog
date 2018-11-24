app.post('/post/:title/:newtitle', function (req, res) {
  var data = req.body;
  var title = data.title;
  var newtitle = data.newtitle;

  words[title] = newtitle;

  var data = JSON.stringify(words,null,2);
  fs.writeFile('articles.json', data, finished);

  function finished(err){
  	console.log('all set.');
  	var reply = {
  		title: newtitle,
  		newtitle: newtitle,
  		msg: 'thank you for submitting your title'
  	}
  	res.send(reply);
  }
 
})