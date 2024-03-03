const { Reservation } = require("../models/models");

module.exports = {
    makeReservation: async (req, res) => {
        try {

        } catch (error) {
            console.log(error);
        }
    },
    uploadData: async (req, res) => {
        try {
            const lines = req.body.data.split('\n')
            let result = []
            for (var i = 0; i < lines.length; i++) {
                var obj = {
                    codeActivation: "",
                    etat: -1,
                    iccid: "",
                    pin1: "",
                    puc1: "",
                    pin2: "",
                    puc2: "",
                    msisdn: ""
                }
                obj.codeActivation = lines[i][6]
                obj.iccid = lines[i][1]
                obj.msisdn = lines[i][0]
                obj.pin1 = lines[i][2]
                obj.puc1 = lines[i][3]
                obj.pin2 = lines[i][4]
                obj.puc2 = lines[i][5]
                result.push(obj)
            }
            console.log(result);
            res.send('Data received');
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');
        }
    }

}