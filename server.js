var config = require('config'),
    express = require('express'),
    path = require('path'),
    server = module.exports = express()
;

server.use(express.static(__dirname + '/client'));

server.locals.config = config;

server.listen(process.env.PORT || config.port);

server.get('*', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});

console.log(`I'm listening on ${process.env.PORT || config.port}`);
