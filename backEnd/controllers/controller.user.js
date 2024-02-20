const { User } = require("../models/models.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    register: async (req, res) => {
        try {
            const hashedPass = await bcrypt.hash(req.body.password, 10);
            const result = await User.create({
                ...req.body,
                password: hashedPass
            });
            res.status(201).send({
                message: 'user created successfully',
                result
            });
        } catch (error) {
            console.log(error);
            // res.status(500).send({
            //     message: "Error hashing password",
            //     error
            // });
        }
    },
    login: async (req, res) => {
        try {
            const result = await User.findOne({ where: { email: req.body.email } });
            // console.log(result);
            const passChecked = await bcrypt.compare(req.body.password, result.password);
            console.log(passChecked);
            if (!passChecked) {
                res.status(403).send({
                    message: 'wrong password',
                    error
                });
            }
            const token = jwt.sign({
                userId: result.id,
                email: result.email
            },
                process.env.SECRET_KEY,
                { expiresIn: "24h" }
            );
            res.status(200).json({
                message: "token created successfully",
                userId: result.id,
                token: token
            });
        } catch (error) {
            res.status(400).send({
                message: "cannot generate a token",
                error
            });
        }
    },
    getOne: async (req, res) => {                                   // need test
        try {
            res.status(200).send(req.user);
        } catch (error) {
            res.status(400).send({ message: 'you need to authenticate', error: error });
        }
    },
    deleteOneUser: async (req, res) => {
        try {
            const trush = await User.findOne({ where: { id: req.params.id } })
            const bay = await User.destroy({ where: { id: req.params.id } })
            res.status(200).json(trush)
        } catch (error) {
            console.log(error);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            console.log(error);
        }
    },
    updateUser: async (req, res) => {
        try {
            const oldData = await User.findOne({ where: { id: req.params.id } })
            if (oldData.password !== req.body.password) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                const user = await User.update({
                    ...req.body,
                    password: hashedPassword
                }, { where: { id: req.params.id } })
            } else {
                await User.update(req.body, { where: { id: req.params.id } })
            }
            const newData = await User.findOne({ where: { id: req.params.id } })
            res.status(200).json(newData)
        } catch (error) {
            console.log(error);
        }
    }

};
