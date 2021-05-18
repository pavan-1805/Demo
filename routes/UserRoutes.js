const { response } = require('express');
const express = require('express');
const Router = express.Router()
const User = require('../models/usermodel')


Router.get('/',(requst,response) => {
    User.find()
    .then(result=>{
        console.log(result);
        response.status(200).json({
            USER_DATA : result
        })
    })
    .catch(error=>{
        console.log(error);
        response.status(401).json({
            Error : error
        })
    })
    
})


Router.post('/',(request,response)=>{
    const user = new User({

        email : request.body.email,
        password : request.body.password

    })
    user.save()
    .then(result => {
        console.log(result);
        response.status(200).json({
            USER_DATA : result
        })
    })
    .catch( error=>{
        console.log(error);
        response.status(500).json({
            Error : error
        })
    })
})


Router.get('/:name',(request,response)=>{
    console.log(request.params.id);
    User.find({email : request.params.name})
    .then(result => {
        console.log(result);
        response.status(200).json({
            DATA : result
        })
    })
    .catch(error=>{
        console.log(error);
        response.status(500).json({
            Error : error
        })
    })
})



Router.delete('/:id',(request,response)=>{
    User.remove({email:request.params.id})
    .then(result=>{
            response.status(200).json({
                message : "deleted"
            })
    })
    .catch(error=>{
        response.status(500).json({
            Error : error
        })
    })
})


module.exports = Router;