const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/adddetails', async (req, res) => {
  try {
    const { name, price, category , shop } = req.body;
    if(!name || !price || !category|| !shop){
      return res.status(401).json({message : "Missing Fields."});
    }
    const product = new Product({
      name, price, category, shop
    });
    await product.save();
    res.status(201).json({message: "Details Saved Successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error});
  }0
});
router.get("/view", async (req, res) => {
    try{
        const prd = await Product.find();
        if(prd){
    return res.status(201).json(prd);
        }
        else{
            return res.status(404).send("No products Found");
        }
    }catch(e){}
    });

    router.delete('/delete/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const result = await Product.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
          res.send({ message: 'Poduct deleted' });
        } else {
          res.status(404).send({ error: 'Product not found' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Server error' });
      }
    });
    router.put('/update/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
          res.status(404).send({ error: 'Product not found' });
        } else {
          const { name, price, category , shop } = req.body;
          product.name = name || product.name;
          product.price = price || product.price;
          product.category = category || product.category;
          product.shop = shop|| product.shop;
          await product.save();
          res.send(product);
        }
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Server error' });
      }
    });
module.exports = router;
