const express = require('express')
const mongoose = require('mongoose');
const app = express()
const path = require('path')
const cors = require('cors')
// const cookieParser = require('cookie-parser');
require('dotenv').config()



// import other controllers to index.js
const userController = require('./controllers/userController');
const classController = require('./controllers/classController');
// Dotenv to manage a .env file.
const port = process.env.PORT || 5000
// console.log(process.env.DB_USER)

console.log('env',process.env.NODE_ENV)



app.use(cors())
// accept the data in JSON
app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

// mongodb connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@yoga-class.ksudmok.mongodb.net/?retryWrites=true&w=majority&appName=yoga-class/`;
mongoose.connect(uri)





// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    //create a database and collections
    const database = client.db("yoga-class")
    // const usersCollection = database.collection("users")
    // const classesCollection = database.collection("classes")
    // const cardCollection = database.collection("card")
    // const paymentCollection = database.collection("payments")
    // const enrolledCollection = database.collection("enrolled")
    // const appliedCollection = database.collection("applied")
    
    // console.log('database', database)
    // // class routes
    // app.get('/new-class', async (req, res) => {
    //   const newClass = req.body;
    //   const result = await classesCollection.insertOne(newClass)
    //   res.send(result);
    // //  res.status(200).sendFile(path.resolve(__dirname, './client/scripts/signup.html'))
    // })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  finally {
    //Ensures that the client will close when you finish/error
    await client.close();
  }
}


run().catch(console.dir);
//C:\Users\ghkds\Desktop\solo_project\build
//src\server\server.js
//C:\Users\ghkds\Desktop\solo_project\src\server\server.js
app.use('/', express.static(path.join(__dirname, '../build')))
//app.use('/', express.static(path.join(__dirname, '../styles/style.css')))
// console.log('dir', path.join(__dirname, '../build'))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './index.html'))
})

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../styles/style.css'))
// })

app.get('/signup', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './client/scripts/signup.html'))
})


app.post('/signup', userController.createUser, (req, res) => {
// app.post('/signup', (req, res) => {
  // res.status(200).json(res.locals.newuser)
  res.status(200).json(res.locals.newUser)
})
// app.post('/login', userController.verifyUser, (req, res) => {
app.post('/login', (req, res) => {
  return res.status(200).send('login successfully')
})

// console.log('where?' ,path.resolve(__dirname, '../client/scripts/class.html'))


app.get('/class', classController.getClass, (req, res) => {
  return res.status(200).json(res.locals.allClasses)
})
app.get('/class', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/scripts/class.html'))
})

app.get('/class/:sort', classController.availableClass, (req, res) => {
  return res.status(200).json(res.locals.available).sendFile(path.resolve(__dirname, '../client/scripts/class.html'))
})
app.post('/new-class', classController.createClass, (req, res) => {
  return res.status(201).json(res.locals.newClass)
})

// testing to handle get request  /api route

app.get('/api', (req, res) => {
    return res.status(200).send('test')
})

//updating status for class
// app.patch('/change-status/:id', classController.updateClass, (req, res) => {
//   return res.status(200).json(res.locals.updateClass)
// })










//error handler for all invalid endpoint

app.get('*', (req, res) => {
res.status(404).sendFile(path.resolve(__dirname, '../client/scripts/error.html'))
})


//global error handling for internal error (500)
app.use((err, req, res, next)=> {
  console.log(err);
  res.status(500).send({error: err});
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

module.exports = app;