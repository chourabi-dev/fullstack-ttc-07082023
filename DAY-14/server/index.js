const express = require('express')
const app = express()
const port = 8080
const parser = require('body-parser');
const { getProductList, addProduct, getProductListByPrice, updateProduct, deleteProduct } = require('./modules/produit');

app.use( parser.json() );

 
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



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})