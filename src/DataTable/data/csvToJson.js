const csvToJson = require('csvtojson');
const FileSystem = require('fs');
csvToJson()
  .fromFile('./csvdata.csv')
  .then((source) => {
    // console.log(source);
    const data = JSON.stringify(source);
    FileSystem.writeFile('data.js', data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('the file created');
    });
  });
