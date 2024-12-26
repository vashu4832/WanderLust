const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userCotroller = require("../controllers/user.js");


router
    .route("/signup")
    .get(userCotroller.renderSignUpForm)
    .post(wrapAsync(userCotroller.signUp));

router
    .route("/login")
    .get(userCotroller.renderLogInForm)
    .post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userCotroller.logIn);

//logOut
router.get("/logout", userCotroller.logOut);

module.exports = router;