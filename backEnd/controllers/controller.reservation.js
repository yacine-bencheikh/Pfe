const { Reservation } = require("../models/models");
const { getOne } = require("./controller.user");

module.exports = {
    getAllReservations: async (req, res) => {
        try {
            const reservations = await Reservation.findAll();
            res.status(200).send(reservations);
        } catch (error) {
            console.log(error);
        }
    },
    uploadData: async (req, res) => {
        try {
            const lines = req.body.data.split('\n')
            const fields = lines.map(line => line.split(' '))
            let result = []
            for (var i = 0; i < fields.length; i++) {
                var obj = {
                    codeActivation: "",
                    chaineCar: "libre",
                    etat: -1,
                    iccid: "",
                    pin1: "",
                    puc1: "",
                    pin2: "",
                    puc2: "",
                    msisdn: ""
                }
                obj.codeActivation = fields[i][6]
                obj.iccid = fields[i][1]
                obj.msisdn = fields[i][0]
                obj.pin1 = fields[i][2]
                obj.puc1 = fields[i][3]
                obj.pin2 = fields[i][4]
                obj.puc2 = fields[i][5]
                result.push(obj)
            }
            const reservations = await Reservation.bulkCreate(result)
            res.status(200).send(reservations);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    getOneReservation: async (req, res) => {
        try {
            const reservation = await Reservation.findOne({ where: { chaineCar: 'libre' } });
            if (reservation) {
                reservation.UserId = req.params.UserId;
                reservation.chaineCar = 'reserver';
                await reservation.save();
                res.status(200).send(reservation);
            }
        } catch (error) {
            console.log(error);
        }
    },
    cancelReservation: async (req, res) => {
        try {
            const reservation = await Reservation.update(req.body, {where: {iccid: req.body.iccid}});
            res.status(200).send(reservation);
        } catch (error) {
            console.log(error);
        }
    }

}