const User = require('../models').user;

exports.addUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body
        await User.create({
            name, email, password, phone
        });
        let msg = 'User created successfully'
        return res.success(msg, {})
    } catch (err) {
        console.log(err);
        return res.error(err.message, err)
    }
}