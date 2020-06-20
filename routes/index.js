const express = require("express");
const { Router } = require("express");
const router = express.Router();

/*  @desc Login/Landing Page 
    @router GET /
*/
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    });
});

/*  @desc Dashboard/Landing Page 
    @router GET /dashboard
*/
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

module.exports = router;