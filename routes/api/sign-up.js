const express = require('express');
const {User} = require('../../model/user');
// export defolet login
// const {createUser} = require('../../queries/createUser');
const router = express.Router();


router.get('/', (req, res, next) =>{
   
     res.render('sign-up');

});
 
module.exports = router;