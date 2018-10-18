const express = require('express');
const {User} = require('../../model/user');
// const {createUser} = require('../../queries/createUser');
const router = express.Router();


router.get('/', (req, res, next) =>{
   
     res.render('sign-up');

});

// router.post('/', (req, res, next) =>{
//     const newUser = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: req.body.password
//     };
//     const zUser = new User({newUser});
//     zUser.save((err, user) =>{
//         if(err) return console.error(err);
//         console.log(user);
//     });
//       res.redirect('../');
//     createUser(User, newUser).then(user =>{
//         res.redirect('../');
//     });
  
// });
module.exports = router;