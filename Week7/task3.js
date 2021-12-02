const http = require('http');
const path = require('path');
const fs = require('fs');

const url = "http://localhost:8000"
const pagesDirectory = path.join(__dirname, 'pages');

const PORT = 8000;

const hostname = '127.0.0.1';
const localJSONObject = {
    testProp: 'testPropValue'
}

const handleNotFound = (res) => {
    const notFoundFilePath = path.join(pagesDirectory, 'not-found.html')
    const readStream = fs.createReadStream(notFoundFilePath);
 
    readStream.on('ready', () => {
        res.writeHead(200, {'Content-Type': 'text/html'});
    });
    readStream.on('error', (err) => console.log(err));
    readStream.pipe(res);
}
const routes = {
    'notfound': handleNotFound
}
const server = http.createServer((req, res) =>{
    const url = req.url;
    const urlExpectedExpr = /load\/:([0-9a-zA-Z-]*)/;

    
    const propValue = url.match(urlExpectedExpr);
    if(propValue === null || localJSONObject[propValue[1]] === undefined){
        handleNotFound(res);
        return;
    }
    const returnValue = localJSONObject[propValue[1]];
    res.write(returnValue);
    res.end();
})

server.listen(PORT, hostname, () => {
    console.log(`Server is running`);
    class AsyncDelivery {
      constructor() {
        return new Proxy(this, {
          get: (obj, prop) => {
            return new Promise((resolve) => {
              http.get(`http://${hostname}:${PORT}/load/:${prop}`, (res) => {
                let storedRes = '';
                res.on('data', (chunk) => storedRes += chunk);
                res.on('end', () => resolve(storedRes))
              });
            });
          }
        })
      
    }
}
      (async function () {
        const x = new AsyncDelivery();
        console.log(await x.testProp);
      })();
  });

