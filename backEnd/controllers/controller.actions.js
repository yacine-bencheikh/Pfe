const { Actions } = require("../models/models");

module.exports = {

    getAllActions: async (req, res) => {
        try {
            const actions = await Actions.findAll();
            res.status(200).send(actions);
        } catch (error) {
            res.status(400).send({ message: 'you need to authenticate', error: error });
        }
    },
}