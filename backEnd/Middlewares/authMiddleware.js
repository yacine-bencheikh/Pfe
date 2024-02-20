const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

authmiddleware = async (req, res, next) => {
    try {
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            const token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.userId && decoded.email) {
                try {
                    req.user = await User.findByPk(decoded.userId,
                        { all: true, nested: true }
                    )
                    next()
                } catch (error) {
                    res.status(401).send(
                        {
                            message: 'Authentication failed',
                            error
                        }
                    )
                }
            }
            else {
                res.status(401).send({ message: 'Authentication failed' })
            }
        }
        else {
            res.status(401).send({ message: 'Authentication failed' })
        }
    } catch (error) {
        res.status(401).send({ message: 'Invalid token' });
    }
}

module.exports = authmiddleware;
