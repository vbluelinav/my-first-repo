const User = require('../models/usermodels')
// const bcrypt = require('bcryptjs')

const userController = {};

// find user 
userController.createUser = async(req, res, next) => {
const {username, password} = req.body;
if(!username || !password) {
    return next({error: 'Missing Username or Password'})
}
try {
    const newUser = new User({username, password})
    newUser.save();

    res.locals.newUser = newUser;
    return next()

}catch(error) {
    return next({error: 'error found from UserController.createUser middleware'})
}


}
userController.verifyUser = async(req, res, next) => {
const {username, password} = req.body;

if(!username || !password) {
    return next({error: 'Missing Username or Password'})
}
try {
    const user = await User.findOne({username})
    if(!user) {
        res.redirect('/signup')
    }
    // } else {
    //     result = await bcrypt.compare(password, user.password)
    // }
    // if(!result) {
    //     res.redirect('/signup')

    res.locals.user = user;
    return next()

}catch(error) {
    return next({error: 'error found from UserController.verifyUser middleware'})
}
}

module.exports = userController;