var express = require('express'),
          app = express(),
          http = require('http'),
          httpServer = http.Server(app);

app.use(express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
          res.sendFile(__dirname + '/index.html');
});
app.use('/scripts.js', function(req, res) {
          res.setHeader('content-type', 'application/javascript');
          res.sendFile(__dirname + '/scripts/script.js')
});
app.listen(4000);
