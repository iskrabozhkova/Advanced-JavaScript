const fs = require('fs');

const delay = (fn) => {
    const delayTime = 3_000;
    return new Promise((resolve, reject) => {
        var startTime = new Date().getTime();
        var result = fn();
        var endTime = new Date().getTime();

        var diff = endTime - startTime;
        setTimeout(() => {
            resolve(result);
        }, delayTime - diff);
    })
}

delay(() => {
    return fs.readFileSync("data.txt", "utf-8");
})
.then(console.log);

