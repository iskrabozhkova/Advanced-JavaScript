const http = require('http');
const { Stream } = require('stream');

class RevisionStream extends Stream.Transform{
    constructor(options){
        
        this.prevChunk = '';
    }
    _transform(chunk, encoding,next){
        chunk.replace(/\b(have|think)\b/, '****')
    }
}
http.get({hostname: 'www.paulgraham.com', path: '/hwh.html',method: 'get'}, (response) => {
    response.on('data', (data) => {
        process.stdout.write(data);
    });
})