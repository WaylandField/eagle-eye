var url = "eagleEyeDB";
var db = require("mongojs").connect(url,['roles']);
db.roles.findOne(function(err, doc){
    if(err){
        console.log(err);
    }
    console.log(doc);
});
db.roles.find({},function(err, docs){
    if(err){
        console.log(err);
    }
    console.log(docs);
});
