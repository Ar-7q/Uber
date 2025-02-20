const express = require('express');
const router =express.Router();
const {body}=require('express-validator')

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name not less than 3'),
    body('password').isLength({min:6}).withMessage('password must not less than 6')
])

module.exports=router 