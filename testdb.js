var fs = require('fs');
var url = "eagleEyeDB";
var db = require("mongojs").connect(url,['roles']);
db.roles.findOne(function(err, doc){
    if(err){
        console.log(err);
    }
//    console.log(doc);
});
var names = [];
db.roles.find({},function(err, docs){
    if(err){
        console.log(err);
    }else{
        for(var j in docs){
            for(var jj in docs[j].users){
//                console.log(docs[j].users[jj].username);
                var username = docs[j].users[jj].username;
                names.push(username);
            }
        }
        var jj ="";
        var files = fs.readdirSync("./static/testdata/photo/");
        for(var f in files){
            jj+="<image>\n";
            jj+="<image_path>testdata/photo/"+files[f]+"</image_path>\n";
            jj+="<text>"+names[f]+"</text>\n";
            jj+="<url>"+f+"</url>\n";
            jj+="</image>\n";
        }
        console.log(jj);

    }
});
