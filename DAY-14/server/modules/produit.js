const mongodb = require('mongodb');
const objectId = require('mongodb').ObjectId;

const dbURL  = 'mongodb://127.0.0.1:27017';
const dbName = 'testproductsapp';

const url = require('url');

exports.getProductList = function(req,res){
    

    // 1 create a mongo client

    mongodb.MongoClient.connect(dbURL).then(
        (server)=>{
            const db = server.db(dbName);



            db.collection('produits').find().toArray().then(

                (data)=>{
                    res.send(data);
                }

            ).catch(
                (err)=>{
                    res.send({ success:false, message:"err collection" })
                }
            )    // EQ SELECT * FROM table




        }
    ).catch(
        (error)=>{
            res.send({ success:false, message:"err db" })
        }
    )

    
 
}


exports.addProduct = function(req,res){
    const produit = req.body;

  
    mongodb.MongoClient.connect(dbURL).then((server)=>{

        const db = server.db(dbName);

        db.collection('produits').insertOne(produit).then((doc)=>{
            res.send({ success:true, message:"inserted successfuly" })
        }).catch(
            (err)=>{
                res.send({ success:false, message:"err insert" })
            }
        )



    }).catch((err)=>{
        res.send({ success:false, message:"err db" })
    })
 
}



exports.getProductListByPrice = function(req,res){
    
    const params = url.parse(req.url,true).query;
    




    // 1 create a mongo client

    mongodb.MongoClient.connect(dbURL).then(
        (server)=>{
            const db = server.db(dbName);


            /*
            $lt  less than
            $lte less than equial
            $gt greater than
            $gte greater than equal
            $in 

            
            */
            db.collection('produits').find( { price :   {  $lt : Number(params.price)  }   } ).toArray().then(

                (data)=>{
                    res.send(data);
                }

            ).catch(
                (err)=>{
                    res.send({ success:false, message:"err collection" })
                }
            )    // EQ SELECT * FROM table




        }
    ).catch(
        (error)=>{
            res.send({ success:false, message:"err db" })
        }
    )

    
 
}



exports.updateProduct = function(req,res){
    const docID = req.body.id;


    mongodb.MongoClient.connect(dbURL).then((server)=>{


        const db = server.db(dbName);


        db.collection('produits').findOne( { _id: new objectId(docID) } ).then((doc)=>{
            
            if( doc != null ){
                // update !!

                const newProduct = {
                    name: req.body.name,
                    price: req.body.price,
                    quantity: req.body.quantity,
                    
                }
                db.collection('produits').updateOne( { _id: new objectId(docID) }, {  $set : newProduct  } ).then(
                    (doc)=>{
                        res.send({ success:true, message:"updated successfully." })
                    }
                ).catch(
                    (err)=>{
                        res.send({ success:false, message:"err update" })
                    }
                )

            }else{
                res.send({ success:false, message:"not found" })
            }


            
        }).catch((err)=>{
            res.send({ success:false, message:"not found" })
        })
        

    }).catch(
        (error)=>{
            console.log(error);
            res.send({ success:false, message:"err db" })
        }
    )

}


exports.deleteProduct = function(req,res){
    const params = url.parse(req.url,true).query;
    

    const docID  = params.id;


    mongodb.MongoClient.connect(dbURL).then((server)=>{


        const db = server.db(dbName);


        db.collection('produits').findOne( { _id: new objectId(docID) } ).then((doc)=>{
            
            if( doc != null ){
                
                db.collection('produits').deleteOne( { _id: new objectId(docID) }  ).then(
                    (doc)=>{
                        res.send({ success:true, message:"deleted successfully." })
                    }
                ).catch(
                    (err)=>{
                        res.send({ success:false, message:"err delete" })
                    }
                )

            }else{
                res.send({ success:false, message:"not found" })
            }


            
        }).catch((err)=>{
            res.send({ success:false, message:"not found" })
        })
        

    }).catch(
        (error)=>{
            console.log(error);
            res.send({ success:false, message:"err db" })
        }
    )


}