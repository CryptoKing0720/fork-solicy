const express = require('express');
const router = express.Router();
const Block = require('../model/blocks')


router.get('/', async (req, res) => {

    try {
        const blocks = await Block.find({})
        res.send(blocks)

    } catch (error) {
        res.status(500).send(error)
    }

})

router.post('/', async (req, res) => {

    const block = new Block({
        name: req.body.name,
        hash: req.body.hash,
        data: req.body.data,
        user: req.body.user
    })

    try {
        if (!block) {
            res.send("Send proper data")
        }
        await block.save()
        await block.populate('user').execPopulate()
        res.status(200).send(block)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/update',async(req,res)=>{
    try {
     const block = await Block.findByIdAndUpdate(req.body.id,{name :req.body.newName},{new:true,runValidators:true})
     if(!block){
        return res.status(404).send("block does not exists")
    }
     await block.save()
     res.send(block)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const block = await Block.findById(req.params.id)
        await block.remove()
        if(!block){
            return res.status(404).send("block not found")
        }
        res.send(block)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router