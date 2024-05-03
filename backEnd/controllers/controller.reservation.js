const { Reservation,Actions, User } = require("../models/models");

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
            console.log(lines);

            const result = lines.map((line) => {
                var obj = {
                    codeActivation: "",
                    chaineCar: "libre",
                    etat: -1,
                    iccid: "",
                    pin1: "",
                    puc1: "",
                    pin2: "",
                    puc2: "",
                    msisdn: "",
                    profileType: "",
                }

                var imsi = line.match(/\b\d{15}\b/);
                var iccid = line.match(/\b[A-Za-z0-9]{19,20}\b/);
                var pin1 = (line.match(/\b\d{4}\b/g) || []).shift();
                var puk1 = (line.match(/\b\d{8}\b/g) || []).shift();
                var pin2 = (line.match(/\b\d{4}\b/g) || []).pop();
                var puk2 = (line.match(/\b\d{8}\b/g) || []).pop();
                var ac = line.match(/1\$.*$/);
                obj.codeActivation = ac ? ac[0] : null; // Check if ac is not null before accessing its elements
                obj.iccid = iccid ? iccid[0] : null; // Check if iccid is not null before accessing its elements
                obj.msisdn = imsi ? imsi[0] : null; // Check if imsi is not null before accessing its elements
                obj.pin1 = pin1 ? pin1 : null; // Check if pin1 is not null before accessing its elements
                obj.puc1 = puk1 ? puk1 : null; // Check if puk1 is not null before accessing its elements
                obj.pin2 = pin2 ? pin2 : null; // Check if pin2 is not null before accessing its elements
                obj.puc2 = puk2 ? puk2 : null; // Check if puk2 is not null before accessing its elements
                obj.profileType = imsi ? "Nouvelle acquisation" : "Sim swap"
                return obj
            })
            const cleanResult = result.filter((obj) => {
                return obj.iccid !== null
            })

            const reservations = await Reservation.bulkCreate(cleanResult)
            res.status(200).send(reservations);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    getOneReservation: async (req, res) => {
        try {
            if (req.params.profileType === "new") {
                var reservation = await Reservation.findOne({
                    where: {
                        chaineCar: 'libre',
                        profileType: "Nouvelle acquisation"
                    }
                });

            }else if(req.params.profileType === "swap"){
                var reservation = await Reservation.findOne({
                    where: {
                        chaineCar: 'libre',
                        profileType: "Sim swap"
                    }
                });
            }
            if (reservation) {
                reservation.chaineCar = 'reserver';
                await reservation.save();
                const user = await User.findOne({ where: { id: req.userId } });
                const action = await Actions.create({action: "reservation temporaire", iccid: reservation.iccid, UserId: req.userId, AdminId: user.createdBy, userName: user.firstName + " " + user.lastName,actionDate: Date.now()})
                res.status(200).send( reservation);
            }
        } catch (error) {
            console.log(error);
        }
    },
    cancelReservation: async (req, res) => {
        try {
            const reservation = await Reservation.update({...req.body, chaineCar: "libre", UserId: null, createdBy: null}, { where: { iccid: req.body.iccid } });
            const user = await User.findOne({ where: { id: req.userId } });
            const action = await Actions.create({action: "Annulation de reservation",iccid: req.body.iccid, UserId: req.userId, AdminId: user.createdBy, userName: user.firstName + " " + user.lastName,actionDate: Date.now()})
            res.status(200).send( reservation);
        } catch (error) {
            console.log(error);
        }
    },
    confirmeReservation : async(req,res) => {
        try {
            const reservation = await Reservation.update(req.body, { where: { iccid: req.body.iccid } });
            const user = await User.findOne({ where: { id: req.userId } });
            const action = await Actions.create({action: "reservation complet", iccid: req.body.iccid, UserId: req.userId, AdminId: user.createdBy, userName: user.firstName + " " + user.lastName,actionDate: Date.now()})
            res.status(200).send( action);
        } catch (error) {
            console.log(error);
        }
    }

}