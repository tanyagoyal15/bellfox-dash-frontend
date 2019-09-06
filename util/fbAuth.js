module.exports = {
    isAuthenticated : function(req, res, next) {
        var user = firebase.auth().user;
        if(user !== null) {
            req.user = user;
            next();
        } else {
            res.redirect('/login');
        }
    }
}