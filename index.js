const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hi. This is a thing.');
});

server.listen(80);

console.log('Server running on port 80...');

