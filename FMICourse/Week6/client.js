const http = require('http');
const url = "http://localhost:8000";


class Delivery{
    constructor(){
        return new Proxy(this, {
            get: (obj,prop) => {
                return new Promise((resolve,rej) => {
                    http.get([url, 'load', prop].join('/'), res => {
                        res.on('data', chunk => resolve(chunk.toString()))
                    });
                })

            }
        })
    }
}

const delivery = new Delivery();