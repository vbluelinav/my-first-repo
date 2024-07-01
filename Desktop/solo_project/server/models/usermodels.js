const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs')
const SALT_WORK_FACTOR = 10;



const userSchema = new Schema({
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true}
});


// userSchema.pre('save', async function(next) {
//     try{
//     // store the hash password in the hash variable
//     // const hash = await bcrypt.hash(this.password, SALT_WORK_FACTOR)
//     //  console.log('hash', this.password)

//      this.password = hash;
//      return next();
//     } catch(error) {
//         return next({error: 'error from hashing password'})
//     }

// })

module.exports = mongoose.model('User', userSchema)