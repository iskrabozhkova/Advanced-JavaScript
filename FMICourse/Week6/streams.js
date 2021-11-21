const stream = require('stream');

const data = [1,2,3,4,5, null];

class MyReadableStream extends stream.Readable{
    constructor(options){
        super(options);
    }
    _read(){
        data.forEach(item => this.push(item?.toString() || item));
    }
}

class MyWritableStream extends stream.Writable{
    sum = 0;
    constructor(options){
        super(options);
    }
    _write(chunk, encoding, next){
        this.sum += +chunk;
        next();
    }
    _final(next){
        console.log(this.sum);
        next();
    }
}
class MyTranformStream extends stream.Transform{
    constructor(options){
        super(options);
    }
    _transform(chunk, encoding,next){
        this.push((+chunk+1).toString());
        next();
    }
}


const read = new MyReadableStream();
const write = new MyWritableStream();
const transform = new MyTranformStream();

read.pipe(transform).pipe(write);
