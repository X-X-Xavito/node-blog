var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("we're connected!");
});


  var blogPost_Schema = new mongoose.Schema({
    title:  String,
    subtitle: String,
    publish_date: { type: Date, default: Date.now },
    last_update: { type: Date, default: Date.now },
    body:   String,
    author: String,
    comments: [{ body: String, date: Date, autho_comment: String }],
    //permalink: Boolean,

  });

var blogPost = mongoose.model('blogPost', blogPost_Schema);

var primeiro_post = new blogPost({
    title:  "Primeiro Titulo",
    subtitle: 'este é o primeiro subtitulo',
    //publish_date: { type: Date, default: Date.now },
    //last_update: { type: Date, default: Date.now },
    body:   'este é o conteudo(body) do quarto post',
    author: 'xavito',
    //comments: [{ body: String, date: Date, autho_comment: String }],
    //permalink: Boolean,
})


  primeiro_post.save(function (err, primeiro_post) {
    if (err) return console.error(err);
    blogPost;
  });


module.exports = blogPost;