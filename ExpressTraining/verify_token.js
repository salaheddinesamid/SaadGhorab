const jwt = require('jsonwebtoken');


function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    else{
        next();
    }
 };

module.exports = verifyToken;