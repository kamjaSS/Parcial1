const express = require('express')
const saleSchema = require('../models/sale')
const router = express.Router()
// Agregar un nuevo usuario

router.post('/sale',(req,res)=>{
    const sale = saleSchema(req.body)
    sale
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Listar los usuarios existentes en la BD
router.get('/sales',(req,res)=>{
    saleSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Consultar un recurso específico existente en la BD
router.get('/sales/:id',(req,res)=>{
    const {id} = req.params
    saleSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Consultar un recurso específico existente en la BD
router.get('/salesRef/:Ref',(req,res)=>{
    const {Ref} = req.params
    saleSchema
        .find({"Line.ExpenseDetail.Customer.Ref.value": Ref})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})

// Consultar un recurso específico existente en la BD
router.get('/salesDetail/:DetailType',(req,res)=>{
    const {DetailType} = req.params
    saleSchema
        .find({"Line.DetailType": DetailType})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})

router.get("/:productId", (req, res) => {
    const { productId } = req.params;
    saleSchema
      .findById(productId)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// Eliminar un recurso específico existente en la BD
router.delete('/sales/:id',(req,res)=>{
    const {id} = req.params
    saleSchema
    .remove({ _id: id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})
// Actualizar un recurso específico existente en la BD
router.put('/sales/:id', (req, res) => {
    const { id } = req.params
    const { nuevoCodigoFactura } = req.body
    saleSchema
        .updateOne({ _id: id }, { $set: { "Line.ExpenseDetail.Customer.Ref.value": nuevoCodigoFactura } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

});
module.exports = router