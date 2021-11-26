const https = require('https');

const server = https.createServer((req, res) => {
    const url = req.url.split('?search=').splice(-1);

    https.get('https://' + url[0], (data) => {
        data.on('data', (chunk) => {
            res.write(chunk);
        })
        data.on('end', () => {
            res.writeHead(200);
            res.end();
        })
    })
})

server.listen(5000, () => {
    console.log('Server listening');
});