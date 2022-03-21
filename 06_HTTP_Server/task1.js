const fs = require('fs');
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
   const changedChunk =  chunk.replace(/(Lorem|Ipsum)/g, '------');
   this.prevLastPiece= changedChunk?.split(/\s+/).slice(-1)[0];
   return changedChunk.slice(0,changedChunk.length - this.prevLastPiece.length);
   
 }
}

const readStream = fs.createReadStream('./text.txt',{ highWaterMark: 10 });
const writeStream = fs.createWriteStream('./revision.txt');
const re = new RevisionStream();

fs.createReadStream('./text.txt', {highWaterMark: 10})
  .pipe(re)
  .pipe(fs.createWriteStream('output.txt', {encoding: 'utf-8'}))


  readStream.pipe(re).pipe(writeStream);