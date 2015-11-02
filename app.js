var http = require('http');
var fs = require('fs');
var request = require('request');

function statPV() {
  var options = {
    url: 'http://stat.berwin.me/api/v1/content',
    json: true,
    method: 'POST',
    timeout: 30000,
    body: {
      groupID : '56372245135c3a806b54c2e1',
      sourceID : '563721f8135c3a806b54c2e0',
      token: '563721f8135c3a806b54c2df',
      data : {
        value: 'pv'
      }
    }
  };

  request(options, function(e, r, body) {});
}

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') return res.end();

  var file = '';

  if (req.url === '/') {
    statPV();
    file = fs.readFileSync(__dirname + '/src/index.html');
    res.setHeader("Content-Type", "text/html");
  } else {
    file = fs.readFileSync(__dirname + '/src' + req.url);
    if (~req.url.indexOf('.css')) res.setHeader("Content-Type", "text/css");
  }

  res.end(file);
});

server.listen(3000, function () {
  console.log('\x1B[32m', 'Server started http://127.0.0.1:3000');
});