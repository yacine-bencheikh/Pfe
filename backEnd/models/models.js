const { Sequelize, DataTypes } = require('sequelize');


const connection = new Sequelize("pos", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = { connection }





connection.authenticate()
.then(() => {
    console.log('connection established');
}
)
    .catch((error) => {
        console.log(" connection faild: " + error);
    })






const User = connection.define("User", {
    password: {
        type: DataTypes.STRING(250),
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(18),
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING(18),
    },
    address: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM,
        values: ["admin", "agent"],
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    lastcnct: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdBy:{
        type: DataTypes.INTEGER
    }

});
const Reservation = connection.define('Reservation', {
    codeActivation: {
        type: DataTypes.STRING(100)
    },
    chaineCar: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    etat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    iccid: {
        type: DataTypes.STRING(100)
    },
    pin1: {
        type: DataTypes.STRING(100),
    },
    puc1: {
        type: DataTypes.STRING(100),
    },
    pin2: {
        type: DataTypes.STRING(100),
    },
    puc2: {
        type: DataTypes.STRING(100),
    },
    msisdn: {
        type: DataTypes.STRING(100)
    }
})

User.hasMany(Reservation);
Reservation.belongsTo(User);
// connection.sync({ force: true });




module.exports = {User,Reservation};