const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/create', (req, res) =>{
    res.render('create_user')
});

router.post('/login', (req, res) => {

    db.User.findOne({username: req.body.userName, password: req.body.userPassword})
        .then(user =>{
            if(!user) {
                res.render('/login', {showError: true});
                return;
            }
            req.session.user = user;
            res.redirect('/private');
        })
        .catch(err => {
            res.render('/login', {showError: true});
        });
});