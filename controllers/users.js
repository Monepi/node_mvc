


var userObj = require('../models/users');


exports.users = function(girlOrBoy){

    if(girlOrBoy.toLowerCase() === 'boys')
    {
        return userObj.userBoys();
    }
    if(girlOrBoy.toLowerCase() === 'girls')
    {
        return userObj.userGirls();
    }
};