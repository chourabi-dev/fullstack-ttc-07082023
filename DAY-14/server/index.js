const express = require('express')
const app = express()
const port = 8080
const parser = require('body-parser');
const { getProductList, addProduct, getProductListByPrice, updateProduct, deleteProduct } = require('./modules/produit');
const { createAccount, auth } = require('./modules/user');

app.use( parser.json() );


const jwt = require('jsonwebtoken');
const url = require('url');
 
// INSERT middleware !!!

app.use(function(req,res,next){
    
    
    const pathname = url.parse(req.url,true).pathname;


    if( pathname === '/api/user/auth' ){
        next();
    }else if( pathname ==='/api/user/create-account' ){
        next();
    }else{

        const token = req.headers.authorization;

 
        
        jwt.verify(token, 'secret-key', function(err, decoded) {
            console.log() // bar
    
            if( decoded ){
                next();
            }else{
                res.send({ success:false, message:"Access denied." })
            }
        });
    }

    
     

 
})




 
// GET POST PUT DELETE produit
// id name price quantity


app.get("/api/product",(req,res)=>{
    getProductList(req,res);
    
})


app.get("/api/product/search",(req,res)=>{
    getProductListByPrice(req,res);
    
})



app.post('/api/product',(req,res)=>{
    addProduct(req,res);
})


app.put('/api/product',(req,res)=>{
    updateProduct(req,res);
})


app.delete('/api/product',(req,res)=>{
    deleteProduct(req,res);
})





app.post('/api/user/create-account',(req,res)=>{
    createAccount(req,res)
})


app.post('/api/user/auth',(req,res)=>{
    auth(req,res)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})