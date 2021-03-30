const http = require ('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo')
});

server.listen(3002, () => {
    console.log('Server on port 3002');
})

