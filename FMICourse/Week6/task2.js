const http = require('http');
const stream = require('stream');

class RevisionStream extends stream.Transform{
    constructor(options){
      super(options);
    }
    prevLastPiece = '';
   _transform(chunk, encoding="utf-8", next){
     chunk = this.prevLastPiece + chunk;
     const changedChunk = this._changeChunk(chunk);
     this.push(changedChunk);
     next();
   }
   _changeChunk(chunk){
     const changedChunk =  chunk.replace(/\bhave\b/gm, '****');
     this.prevLastPiece= changedChunk?.split(/\s+/).slice(-1)[0];
     return changedChunk.slice(0,changedChunk.length - this.prevLastPiece.length);
   }
}
  
const server = http.createServer((req, res) => {
    http.get({hostname: 'www.paulgraham.com', path: '/hwh.html',method: 'get'}, (response) => {
        const re = new RevisionStream();
        response.pipe(re).pipe(res);
    })
})

server.listen(8080, () => {
    console.log('SERVER IS LISTENING');
})