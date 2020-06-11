const fs = require('fs');
const path = require('path');

let pathstr = path.join(__dirname, '01_promise.js');

const promise = new Promise((resolve, reject)=> {

    fs.readFile(pathstr, (err, data) => {
        if (err) { 
            return reject(err);
        }
        return resolve(data);
      });

});

promise.then((data) => {

    console.log(data);

})
.catch((err) => {
    console.log(err);
});

