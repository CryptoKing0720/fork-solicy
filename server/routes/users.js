const express = require('express');
const router = express.Router();
const User = require('../model/users')

router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

})

router.get('/users/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        await users.populate('blocks').execPopulate()
        console.log(users.blocks);
        res.send({users,blockList: users.blocks});

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.post('/signup', async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    try {
        if (!user) {
            res.send({ message :"Invalid Input"});
        }
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.checkCredentials(req.body.name, req.body.password)

        if (!user) {
            res.status(404).send({ message :"Invalid Credentials"})
        }

        res.send({user, auth: true})
    } catch (error) {
        console.log(error);
        res.send({ message :"Invalid Credentials", auth:false})
    }
})

router.patch('/users/update',async(req,res)=>{
    try {
     const user = await User.findByIdAndUpdate(req.body.id,{name :req.body.newName},{new:true,runValidators:true})
     if(!user){
        return res.status(404).send("user does not exists")
    }
     await user.save()
     res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/users/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        await user.remove()
        if(!user){
            return res.status(404).send("user not found")
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router