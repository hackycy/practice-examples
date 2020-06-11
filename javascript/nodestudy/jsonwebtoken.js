'use strict';

const jwt = require('jsonwebtoken');

var payload = {
    uid: '1000123',
    exp: 60
}

var token = jwt.sign(payload, 'shhhhh');

console.log(token);

jwt.verify(token, 'shhhhh', (err, decoded) => {
    console.log(err);
    console.log(decoded);
})

