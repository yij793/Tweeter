const express = require('express');
const app = express.Router();
module.exports = function (DataHelpers) {
    app.get("/", function (req, res) {
        DataHelpers.getUser((err, users) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(users);
            }
        });
    });

    ///creat cookie and save to collections 'user'
    app.post('/', (req, res) => {
        const { user, email, password } = req.body;
        const users = {
            user: user,
            email: email,
            password: password
        }
        req.session.user = user
        req.session.email = email
        DataHelpers.saveUser(users, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).send();
            }
        });
    });
    return app
}

