

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { signup_validation, login_validation } = require("../validate")

//SIGN UP

router.post("/signup", async(req, res)=> {

    //TODO; validate email signup with token
    //validate before making user
    const { error } = signup_validation(req.body);
    if(error){ return res.status(400).send(error.details[0].message)};

    //check if email exists
    const email_exists = await User.findOne({email: req.body.email});
    if(email_exists){ return res.status(400).send("email already exists")};

    //HASH PASSWORDS
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashed_password
    });
    try {
        const saved_user = await user.save();
        // res.send("signup successful")
        res.send({user: user._id})
    }catch(err){
        res.status(400).send(err)
    }
})

const check_verification =()=> {
    console.log("middleware positioned correctly")
};

//LOGIN

// router.use("/login", (req,res,next) => {

// })

router.post("/login", async(req, res)=> {

    let not_verified = "user not verified, please check your mail for verification code"

    const {error} = login_validation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    const user  = await User.findOne({email: req.body.email});
    if(!user) return res.status(401).send("Email not found")

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(401).send("Password incorrect")

    !user.isVerified ? res.json(not_verified) : res.json("successful login")

    // res.send("successful login")
})

module.exports = router;