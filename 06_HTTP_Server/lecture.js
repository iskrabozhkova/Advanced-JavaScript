const http = require('http');
const fs = require('fs');
const path = require('path');

const pagesLocation = path.resolve(__dirname, 'pages');

function streamFile(res, fileName){
     const textStream = fs.createReadStream(path.join(pagesLocation,fileName));
     textStream.on('error', () => {
        res.writeHead(500);
        res.end(err.message);
        return;
     })
     textStream.on('ready', () => {
         res.writeHead(200);
     })
     textStream.pipe(res);

}

const routes = {
    '/': 'index.html',
    '/about-us': 'about_us.html',
    '/not-found': 'not-found.html'
}
const server = http.createServer((req, res) => {
//    fs.readFile('./text.txt', (err, content) => {
//        if(err){
//            res.writeHead(500);
//            res.end(err.message);
//            return;
//        }
//        res.writeHead(200);
//        res.end(content);
//    })
    const filePath = routes[req.url] || routes['/not-found'];
    streamFile(res, filePath);

})

server.listen(8080, () => {
    console.log('Server is listening');
});
