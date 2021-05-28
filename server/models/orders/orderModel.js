const mongodb = require('mongoose');
const Order = require('./orderSchema');

exports.createOrder = (req, res) => {

  const order = new Order({
    userId: req.body.id,
    products: req.body.cart

  })
  console.log(order)
  order.save()
  .then(() =>{
    res.status(201).json({
      statusCode: 201,
      status: true,
      message: 'Product created'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode:500,
      status: false,
      message:'Failed to create'
    })
  })

}


exports.updateOrder = (req, res) => {
  
    Order.updateOne( { _id: req.params.id} , {
      ...req.body,
      modified: Date.now()

    })
       .then(() => {
        res.status(200).json({
          statusCode:200,
          status: true,
          message: 'order updated'
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode:500,
          status: false,
          message:'Failed to update product'
        })
      })
    }

exports.getOrders = (req, res) => {

  Order.find({userId: req.params.id})
  .then(data => {
    console.log(data)
    return res.status(200).json(data)
  })
  .catch(err =>{
    return res.status(500).json(err)
  })
}  

exports.getAdminOrders = (req, res) => {

  Order.find()
  .then(data => {
    console.log(data)
    return res.status(200).json(data)
  })
  .catch(err =>{
    return res.status(500).json(err)
  })
}    