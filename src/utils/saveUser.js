const fs = require('fs');
const path = require('path');
const data = require('../db/newData.json');

const saveUser = (user) => {
  try {
    let filePath = path.join(__dirname, '../db/newData.json');
    for (let value of data) {
      if (value.email === user.email) {
        return { status: false, message: 'User Already Exits' };
      }
    }
    data.push(user);
    console.log('data:', data);
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile(filePath, jsonString, (err) => {
      if (err) {
        console.log('Error writing file', err);
      } else {
        console.log('File Written Successfully');
      }
    });
    return { status: true, message: '' };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

module.exports = saveUser;
