const validator = require("validator");

const validateSignUpData = (req) =>{
    const {firstName, lastName, emailId, password} = req.body;
    if(!firstName || !lastName ){
        throw new Error("Name is not valid");
    }
    else if(!emailId){
        throw new Error("Email is not valid");
    }
    else if(!password){
        throw new Error("Password is not valid");
    }
};

module.exports = { validateSignUpData};