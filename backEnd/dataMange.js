const fs = require('fs');
let result = [];

fs.readFile('./data.txt', 'utf-8', (err, jsonString) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    let dataArr = jsonString.split('\n');

    dataArr.forEach((element) => {
        // Skip empty lines
        if (element.trim() === '') return;

        let arr = element.split(" ");
        let obj = {
            msisdn: arr[0],
            iccid: arr[1],
            pin1: arr[2],
            puc1: arr[3],
            pin2: arr[4],
            puc2: arr[5],
            codeActivation: arr[6]
        };
        result.push(obj);
    });

    console.log(result);
    // na9sa write a file json  ken mech mawjouda sinon zidha ,
});
