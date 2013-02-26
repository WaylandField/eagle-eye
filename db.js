var url = "eagleEyeDB";
var db = require("mongojs").connect("eagleEyeDB",['roles']);
exports.getDb = function(){
    console.log(db.navigations);
    if(!db){
        console.log("error while loading database");
    }
    return db;
};
//exports.getDb = function(){
//    var mongo = require('mongodb'),
//        Server = mongo.Server,
//        Db = mongo.Db;

//    var server = new Server('localhost', 27017, {auto_reconnect: true});
//    var db = new Db('grandhistory', server);
//    db.open(function(err, db) {
//        if(!err) {
//            console.log("We are connected");
//        }
//    });
//}
