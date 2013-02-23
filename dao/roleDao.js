var db = require('../db').getDb();

exports.getRoles = function(query, callback){
    var result = [];
    db.roles.find(query, function(err, roles){
        callback.call(callback, roles);
    });
};
