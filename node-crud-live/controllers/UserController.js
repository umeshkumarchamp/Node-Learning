const User = require('../models/user');

// CRUD Operations

// get All Users
exports.getAllUsers = (req, res, next) => {
    User.findAll().then(users =>{
        res.status(200).json({users : users});
    }).catch(err => console.log(err));
}

// Get User By Id 
exports.getUserById = (req, res, next) =>{
    const userId = req.params.userId;
    User.findByPk(userId).then(user =>{
        if(!user){
            return res.status(404).json({message : 'User not found'});
        }
        res.status(200).json({user : user});
    });
}

// Create a new user
exports.createUser = (req, res, next) =>{
    const name = req.body.name; 
    const email = req.body.email;
    User.create({
        name: name,
        email: email,
    }).then(result =>{
        console.log('User Created');
        res.status(201).json({
            message: 'User Created Successfully',
            user: result
        });
    }).catch(err =>{
        console.log(err);
    });
}

// Update User 
exports.updateUser = (req, res, next) =>{
    const userId = req.params.userId; 
    const updatedName = req.body.name; 
    const updatedEmail = req.body.email;
    User.findByPk(userId).then(user =>{
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        user.name = updatedName;
        user.email = updatedEmail;
        return user.save();
    }).then(result =>{
        res.status(200).json({message : 'User Updated'});
    }).catch(err =>{
        console.log(err);
    })
}

// Delete a User
exports.deleteUser = (req, res, next) =>{
    const userId = req.params.userId; 
    User.findByPk(userId).then(user =>{
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        return User.destroy({
            where:{
                id : userId
            }
        });
    }).then(result =>{
        res.status(200).json({message: 'User deleted'});
    }).catch(err =>{
        console.log(err);
    });
}

