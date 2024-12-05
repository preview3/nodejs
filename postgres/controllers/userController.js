import User from '../models/user.js';

const createUser=(async(req,res)=>{
    try{
        const user=await User.create(req.body)
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

const getUsers=(async(req,res)=>{
    try{
        const users=await User.findAll()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

export {
    createUser,
    getUsers
}