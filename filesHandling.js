const fs = require("fs");

const readFile = (path) =>
    new Promise((resolve, reject) =>
        fs.readFile(path, (err, data) => {
        if (err) reject(err);
        
        // console.log('\n' + path + ' successfully read');
        resolve(data);
        })
    );

const writeFile = (path, data) =>
    new Promise((resolve, reject) =>
      fs.writeFile(path, JSON.stringify(data), (err) => {
        if (err) reject(err);
  
        resolve();
      })
    );
