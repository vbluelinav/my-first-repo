const Class = require('../models/classModels')

const classController = {};

//get class info 
classController.getClass = async(req, res, next) => {
    try{
    const allClasses = await Class.find({});
    res.locals.allClasses = allClasses;
    console.log(allClasses)
    return next();
    }catch(error) {
        return next({error: 'error found from classController.getClass middleware'})
    }
}

// getting class by sorting the class if it's available
classController.availableClass = async (req, res, next) => {
    const sort = req.params.sort
    const query = {status : 'available'}
    try{
        if(sort){
        const sortClass = await Class.find(query)
        if(!sortClass) {
            return next('Classes are all full')
        }
        res.locals.available = sortClass;
        
    }
    return next();

}catch(error) {
        return next({error: 'error found from classController.availableClass middleware'})
    }

}

// create class
classController.createClass = async(req, res, next) => {
const {name, availableSeats, price, instructorName} = req.body

if(!name || !availableSeats || !price || !instructorName) {
return next({error: 'missing Class name, Availableseats, Price, Instructor Name'})
}

try {
const newClass = new Class({name, availableSeats, price, instructorName})
newClass.save();

res.locals.newClass = newClass;
return next();
}catch(error){
return next({error: 'error found from classController.createClass middleware'})
}
}

// update the class status with ID 

classController.updateClass = async(req, res, next) => {
const {id} = req.params;
// update the class status if it's full from available
const status = req.body.status; 
// grabbing the information with id
const filter = { _id: `ObjectId(${id})`}
console.log('filter', filter)
const options = { upsert: true };
const updateDoc = {
    $set: {status: status}
}
if(!id || !status) {
    return next({error: 'Missing id or status'})
}
try{
const result = await Class.updateOne(filter, updateDoc, options)
if(!result) {
return next({error: 'Update failed'})
}

res.locals.updateClass = result;
next();

} catch(error) {
return next({error: 'error found from classController.updateClass middleware'})
}
}


module.exports = classController;