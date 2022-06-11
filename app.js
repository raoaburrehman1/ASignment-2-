const express= require ('express');
const app = express ();
const mongoose = require('mongoose');
require('dotenv/config');
// const req = require('express');
// const res = require('express');
const BodyParser= require('body-parser');
// const { ConnectionStates } = require('mongoose');





// // mongoose
// const mongoose = require('mongoose');
// const { route, use } = require('./route/posts');


//  // connact to mogoose 
    
//  mongoose.connect( 'mongodb+srv://Abdurrehman:rao14022002@cluster0.15ifq.mongodb.net/?retryWrites=true&w=majority', 
//  ()=>
   
              mongoose.connect( process.env.DB_CONNECTION, { useNewUrlParser: true},
                ()=>

                console.log('Connect to DB')
                  );

// // whenever the request hits the body pasrser should executes 
 app.use(BodyParser.json());

//     //importing routers
    
     const Postroute= require('./route/posts');
      app.use('/posts', Postroute);


//  // ROUTES 
    
  app.get('/',(req,res)=> {
      
   res.send('we are on home');
  });

  
//  // HOW WE START TO LISTEN SERVER
   app.listen(5000);