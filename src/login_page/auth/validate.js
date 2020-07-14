

const Joi = require("@hapi/joi");

let jstring = Joi.string();

//signup validation

const signup_validation =( data )=> {

    const schema = Joi.object({
        name:  Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data);
}

const login_validation =( data )=> {

    const schema = Joi.object({
        email: jstring.min(6).required().email(),
        password: jstring.min(6).required(),
    })
    return schema.validate(data);
}

module.exports.signup_validation = signup_validation
module.exports.login_validation = login_validation
