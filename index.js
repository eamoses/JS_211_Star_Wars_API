// require('dotenv').config()
// console.log(process.env.SECRET_KEY)
// const http = require('http');
'use strict';
const assert = require('assert');
//NPM module axios - used only with Nodejs
// const axios = require('axios');
const api_url = 'https://reqres.in/api/products/3';

const api_call = (api_url) => {
    axios.get(api_url)
    .then(function (response) {
        console.log("Axios response: ",response.data.data.color);
    })
}

if (typeof describe === 'function') {
    describe('#api_call()', () => {
        it('url should be spelled correctly', () => {
            assert.equal(api_call(api_url), "It's a match");
        });
        it('has to be in range', () => {
            assert.equal(api_call('https://reqres.in/api/products/4'), "Sorry there are only 3 products");
        });
    });
} else {
    api_call(api_url)
}

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write(
//             `
//                 <!DOCTYPE html>
//                     <html lang="en">
//                     <head>
//                         <meta charset="UTF-8">
//                         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                         <title>Star Wars API</title>
//                     </head>
//                     <body>
//                         <button id="fetch-button">Get A Movie</button>
//                         <br></br>
//                         <div id="api-container"></div>
//                     </body>
//                 </html>
//             `
//         );
//     }
//     res.end();
// });

// server.listen(8080);
// console.log(`The HTTP Server is running on port 8080`);