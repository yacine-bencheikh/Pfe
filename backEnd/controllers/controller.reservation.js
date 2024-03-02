const {Reservation} = require("../models/models");

module.exports ={
    makeReservation: async (req,res)=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    },
    uploadData: async (req,res)=>{
        try {
            console.log(req.body);
            res.send('Data received');
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');
        }
    }
    
}