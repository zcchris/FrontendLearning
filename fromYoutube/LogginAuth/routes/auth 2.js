const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation');

// REGISTER
router.post('/register', async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE A USER [use Joi] 
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) {
        return res.status(400).send('Email already exists');
    }

    // Hash the password [use bcryptjs]
    const salt = await bcrypt.genSalt(10); // generate salt with complexity level 10 (default)
    const hashPassword = await bcrypt.hash(req.body.password, salt); // generate the hash code = salt + hashed password

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch(err) {
        res.status(400).send(err);
    }
});


// LOGIN
// async --> await (需要查查這兩個)
router.post('/login', async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE A USER [use Joi] 
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the email exists
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email not found.');
    // Checking if the password correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password.');

    // Once you logged in! You create a token, so that when you have further request, the server
    // will know you is you by that token.
    //==================================================
    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET); 
    res.header('auth-token', token).send(token);
});

module.exports = router;