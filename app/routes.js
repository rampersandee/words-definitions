const ObjectId = require('mongodb').ObjectId // necessary to allow the use of object ID's
module.exports = function(app, passport, db) {

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        db.collection('messages').find().toArray((err, result) => {
          if (err) return console.log(err)
          res.render('profile.ejs', {
            user : req.user,
            messages: result
          })
        })
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout(() => {
          console.log('User has logged out!')
        });
        res.redirect('/');
    });

// message board routes ===============================================================

    app.post('/messages', (req, res) => {
      db.collection('messages').save({name: req.body.name, word: req.body.word, definition: req.body.definition, thumbUp: 0, thumbDown: 0}, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/profile')
      })
    })

    app.put('/like', (req, res) => { // these can be named however you like, as long is the string matches the front end's request
      const _id = ObjectId(req.body._id) // this is extracting the Id that is being sent from the front end to the back end; it is being wrapped so that MongoDB can locate the object.
      db.collection('messages')
      .findOneAndUpdate({_id}, {
        $inc: {
          thumbUp: 1
        }        
      }, {
        sort: {_id: -1},
  
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
    })
    
    app.put('/unlike', (req, res) => {
      const _id = ObjectId(req.body._id)
      db.collection('messages')
      .findOneAndUpdate({_id}, {
        $inc: {
          thumbDown: 1
        }
      }, {
        sort: {_id: -1},
        
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
    })

    app.delete('/delete', (req, res) => {
      const _id = ObjectId(req.body._id)
      db.collection('messages').findOneAndDelete({_id}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
