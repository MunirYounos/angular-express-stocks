const   express         =require('express');
const   router          =express.Router();
const   passport        =require('passport');
const   jwt             =require('jsonwebtoken');
const   config          = require('../config/database');
const   User            =require('../models/user');
const   schema    =require('../models/stock');



//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) =>{ 
        if(err){
            res.json({success: false, msg: 'Failed to register user.'});
        } else {
            res.json({success: true, msg: 'User Registered.'});
        }
    });

});

//Authenticate
router.post('/authenticate', (req, res, next) => {
   const username = req.body.username;
   const password = req.body.password;

   User.getUserByUsername(username, (err, user)=>{
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User is not available'});
    }
    //campareingform with password comming from the form
    User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: 604800 // 1 week
          });
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              firstname: user.firstname,
              lastname: user.lastname,
              username: user.username,
              email: user.email
            }
          })
        } else {
          return res.json({success: false, msg: 'password is not correct'});
        }
      });
   });
});

//stocks

router.get('/stocks', function(req, res, next) {
  schema.Stock.find({}).exec((err, stocks) => {
      if (err)
          return console.error(err);
      //console.log("Load success: ", stocks);
      res.send(stocks);
  });
  //get user
  res.json({user: req.user});
});

router.post('/stocks', (req, res) => {
  var instance = new schema.Stock(req.body);

  schema.Stock.find({}).sort({_id:-1}).skip(10).exec(function (err, stocks) {
    console.log("stocks are submited by stocs");
    if (err)
        return console.error(err);
    console.log("Loader success: ", stocks);
    stocks.forEach(function(stock){
        console.log("Loader success: ", stock);
        schema.Stock.findByIdAndRemove(stock._id).exec();
    });
});

  instance.save(function (err, Stock) {
      result = err?err:Stock;
      res.send(result);
      router.notifyclients();
      return result;
  });

});

/* Notify stock messages to connected clients */
router.clients = [];
router.addClient = function (client) {
    router.clients.push(client);
    router.notifyclients(client);
};
router.notifyclients = function (client) {
    //console.log('notifyclients')
    schema.Stock.find({}).exec(function (err, stocks) {
        if (err)
            return console.error(err);

        var toNotify = client?new Array(client):router.clients;
        toNotify.forEach(function(socket){
            //console.log('notifyclient'+socket)
            socket.emit('refresh', stocks);
        })
    });
}



// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;