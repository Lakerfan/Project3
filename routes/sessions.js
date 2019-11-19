const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.json({

        isLoggedIn: req.session.isLoggedIn || false
    })
});

router.post('/login', (req, res) => {

    const SECRET_USERNAME = 'Griffin';
    const SECRET_PASSWORD = 'Griffin123';

    if (req.body.email === SECRET_USERNAME && req.body.password === SECRET_PASSWORD) {

        req.session.isLoggedIn = true;
        
        res.json({
            success: true
        })
    } else {

        req.session.isLoggedIn = false;
        res.json({
            success: false
        })
    }
});

router.get('/logout', (req, res) => {

    req.session.destroy( () => {
        res.json({success: true});

    });
})

router.post('/create_user', (req, res) => {

    
})