const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const path = require('path');
const FirebaseAuth = require('firebaseauth'); // or import FirebaseAuth from 'firebaseauth';
const firebase = require('firebase')
require('firebase/auth');


var admin = require("firebase-admin");
var serviceAccount = require("./security-key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bellfox-dash-frontend.firebaseio.com"
});

var database = admin.database();

// firebase.auth().signInWithEmailAndPassword("admin@bellfox.io", "admin123", function(err, result){
//     if (err)
//         console.log(err);
//     else
//         console.log(result);
// });


var firebaseConfig = {
    apiKey: "AIzaSyAh1ZNPj1i9sFSbJDJSUQ3DDn90zkiePFo",
    authDomain: "bellfox-dash-frontend.firebaseapp.com",
    databaseURL: "https://bellfox-dash-frontend.firebaseio.com",
    projectId: "bellfox-dash-frontend",
    storageBucket: "",
    messagingSenderId: "137681543591",
    appId: "1:137681543591:web:19a4e9a396850e7a835682"
};

firebase.initializeApp(firebaseConfig);

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.engine('hbs' , engines.handlebars);
app.set('views' , './views');
app.set('view engine' , 'hbs');
app.use(express.static(path.join(__dirname, 'stylesheets')));


app.get('/' , (request, response) => {
    response.render('index')
})

app.get('/login' , (request, response) => {
    response.render('login')
})

app.post('/login' , (req, res) => {


    const user = {
        email: req.body.email,
        password: req.body.password
    };

    firebase.auth().signInWithEmailAndPassword(user.email , user.password)
    .then((data) => {
        return data.user.getIdToken();
    })
    .then((token) => {
        // return res.json({ token });
        return res.redirect('/dashboard');
    })
    .catch((err) => {
        console.error(err);
        // alert(err.code);
        return res
        .status(403)
        .json({error : err.code})
    });
})

app.get('/signup' , (request, response) => {
    response.render('signup')
})

app.post('/signup' , (req, res) => {
    const newUser = {
        email : req.body.email,
        password : req.body.password,
        handle : req.body.handle
    };

    firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email , newUser.password)
        .then((data) => {
            // return res.status(201).json({ message : `user ${data.user.uid} signed up successfully`})
            return res.redirect('login');
        })
        .catch(err => {
            console.error(err);
            // return res.status(500).json({ error : err.code });
            if(err.code === 'auth/email-already-in-use') {
                // alert('Email already in use')
                return res.status(400).json({ email : 'Email is already in use'});
            } else {
                // alert(err.code);
                return res.status(500).json({ general : 'Something went wrong , Please try again' });
            }
        })
})

app.get('/dashboard' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('dashboard');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/students' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('students.hbs');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/parents' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('parents');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/admins' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('admins');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/ctaform' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('ctaform');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/principal' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('principal');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/viceprincipal' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('viceprincipal');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/hods' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('hods');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/teachers' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('teachers');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/drivers' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('drivers');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/serviceworker' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('serviceworker');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/cleaners' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('cleaners');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/assistant' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('assistant');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/studentdetails', (request, response) => {
    if (firebase.auth().currentUser) {
        response.render('studentdetails');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/parentdetails', (request, response) => {
    if (firebase.auth().currentUser) {
        response.render('parentdetails');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/admindetails', (request, response) => {
    if (firebase.auth().currentUser) {
        response.render('admindetails');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/hoddetails', (request, response) => {
    if (firebase.auth().currentUser) {
        response.render('hoddetails');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/teacherdetails', (request, response) => {
    if (firebase.auth().currentUser) {
        response.render('teacherdetails');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/workerdetails', (request, response) => {
    if (firebase.auth().currentUser) {
        response.render('workerdetails');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addStudent' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('addStudent');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addParent' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('addParent');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addHOD' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('addHOD');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addDriver' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('addDriver');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addServiceWorker' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('addServiceWorker');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addCleaner' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('addCleaner');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addAssistant' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('addAssistant');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addTeacher' , (request, response) => {
    if(firebase.auth().currentUser) {
        response.render('addTeacher');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/addAdmin', (request, response) => {
    if (firebase.auth().currentUser) {
        response.render('addAdmin');
    } else {
        // alert('Please Login to Access Dashboard');
        response.redirect('/login');
    }
})

app.get('/logout' , (req, res, next) => {
    firebase.auth().signOut().then(function() {
        //Log out user
        res.redirect('/');
        // console.log('logout')
    }).catch(function(error) {
        res.json(error);
        // An error happened.
    });
})

module.exports = app;
