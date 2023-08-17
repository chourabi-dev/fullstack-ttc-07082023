const mongodb = require('mongodb');
const dbURL  = 'mongodb://127.0.0.1:27017';
const dbName = 'testproductsapp';
// signin



var jwt = require('jsonwebtoken');

exports.auth = function(req,res){
    const body = req.body;


    mongodb.MongoClient.connect(dbURL).then((server)=>{

        const db = server.db(dbName);

        const user = {
            username: body.username,
            password: body.password
        }

        db.collection("users").findOne(user).then((doc)=>{
            if( doc != null ){
                // create token !!!

                                  // data                            // crypto key 
                var token = jwt.sign(    { username:doc.username }   , 'secret-key');

                res.send({ success:true, token:token })


            }else{
                res.send({ success:false, message:"wrong username or password." })
            }
        })

    })


}





// signup

exports.createAccount = function(req,res){
    const body = req.body;


    mongodb.MongoClient.connect(dbURL).then((server)=>{

        const db = server.db(dbName);

        const user = {
            username: body.username,
            password: body.password
        }

        db.collection("users").insertOne(user).then((doc)=>{
            res.send({ success:true, message:"account created successfully." })
        })

    })


}