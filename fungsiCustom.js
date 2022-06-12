// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const promiseBacaData = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}
const bacaData = async (callback) => {
  let result = [];
  const resultFile = await Promise.all([file1, file2, file3].map(file => {
    return promiseBacaData(file);
  }))

  for (let index = 0; index < resultFile.length; index++) {
   if (index === 0) {
    let temp = JSON.parse(resultFile[index]).message.split(' ')[1];
    result.push(temp);
   } else if (index === 1) {
    let temp = JSON.parse(resultFile[index])[0].message.split(' ')[1];
    result.push(temp);
   } else if (index === 2) {
    let temp = JSON.parse(resultFile[index])[0].data.message.split(' ')[1];
    result.push(temp);
   }
  }

  callback(null, result);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
