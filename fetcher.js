let domainName = process.argv[2];
// console.log(domainName);
let pathName = process.argv[3];
// console.log(pathName);
const request = require('request');
const fs = require('fs');

request(`${domainName}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  if (error) {
    console.log('you have an error: ', error);
  }
  fs.writeFile(pathName, body, (error) => {
    if (error) {
      console.log('you have an error: ', error);
    } else {
      fs.stat(pathName, (err, fileStats) => {
        if (err) {
          console.log('you have an error: ', error);
        } else {
          // console.log(fileStats)
          console.log(`Downloaded and save ${fileStats.size} bytes to ${pathName}`);
        }
      });
    }
  });
});

// fs = require('fs');
// fs.writeFile(filename, data, [encoding], [callback])

// fs = require('fs');
// fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });