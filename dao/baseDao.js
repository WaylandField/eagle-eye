var db = require('../db').getDb();
exports.getDoc = function(doc, query, callback){
    var result = [];
    db[doc].findOne(query,function(err, obj){
        callback.call(callback, obj);
    });
};
exports.getDocs = function(doc, query, callback){
    var result = [];
    db[doc].find(query,function(err, objs){
        objs.forEach(function(obj){
            result.push(obj);
        });
        callback.call(callback, result);
    });
};
exports.save = function(doc, obj, callback){
    db[doc].save(obj, function(err, callback){
        callback.call(callback);
    });
};
exports.update = function(doc, query, obj, upsert, multi, callback){
    db[doc].update(query, obj, upsert, multi, function(err, callback){
        callback.call(callback);
    });
};
exports.remove = function(doc, query, callback){
    db[doc].remove(query, function(err, callback){
        callback.call(callback);
    });
};