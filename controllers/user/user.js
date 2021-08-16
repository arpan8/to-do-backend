const joi = require('joi');
const { success, error } = require('../../middleware/macros');

const user = require('../../models/user/user');
var db = require('../../models/index.js');
const User = user(db.sequelize, db.Sequelize.DataTypes);

exports.addUser = async(req, res) => {
    try {
        let id = req.body.id, msg;

        if(!id){
            await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
            });
            msg = 'User created successfully'
        }else{
            await User.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
            },{
                where:{
                    id: id,
                }
            });
            msg = 'User updated successfully'
        }
        return success({},msg)(res);
    } catch (err) {
        console.log(err);
        return error(err.message)(res);
    }
}