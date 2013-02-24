var db = require('../db').getDb();
var mongo = require('../node_modules/mongojs/node_modules/mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('eagleEyeDB', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'eagleEyeDB' database");
        db.collection('roles', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'roles' collection doesn't exist. Creating it with sample data...");
            }
        });
    }
});

exports.getAllRoles = function(callback) {
    db.collection('roles', function(err, collection) {
        collection.find().toArray(function(err, roles) {
            callback.call(callback, roles);
        });
    });
};

exports.getRoles = function(query, callback) {
    db.collection('roles', function(err, collection) {
        collection.find(query, function(err, roles) {
            callback.call(callback, roles);
        });
    });
};

exports.getRolesByRoleId = function(req, res) {
	 var roleId = req.params.roleId;
	    console.log('Retrieving role roleId: ' + roleId);
	    db.collection('roles', function(err, collection) {
	        collection.find({'roleId':roleId}, function(err, item) {
	          res.send(item);     			
	        });
	    });
};

exports.getRolesByUserId = function(id, callback){
    var result = [];
    db.roles.find({'userId':id},function(err, roles){
        roles.forEach(function(role){
            result.push(role);
        });
        callback.call(callback, result);
    });
};

exports.insertRoles=function()
{
    var roleNameList= new Array("Dev manager", "QA Manager", "QA Lead","Senior QA", "Junior Developer", "Senior Developer","UI Lead","UI desinger","Project manager","DBA");
	var latitudelist = new Array("40N","51N","25N");
	var longtitudelist = new Array("80E","10W","120E");
	var firstNameList= new Array("Bing", "Michael", "Lucy","Kaushik", "Tom", "Hiller","David","Rose","peter","Daniel","lei");
	var lastNameList= new Array("Smith", "roman", "Tian","Yang", "Huang", "Xu","Ronaldo","Rogers","Hu","Liu","Li");
    var compNameList = new Array( "Budgets/Cost Control", "Communication", "Computer Skills","Innovation", "Customer Focus", "People Development","programming","documentation","English","Email");
	var readinessList = new Array("25%","50%","75%","100%","0%");
	var learningList = new Array("Java Programming","Database","Project management","How to be professional","Good Presentation");
	var labelList = new Array("complete","Not Ready");
	var startDateList = new Array("01/02/2006","01/02/2007","01/02/2008","01/02/2009","01/02/2010","01/02/2011","01/02/2012");
	var endDateList = new Array("01/02/2008","01/02/2008","01/02/2010","01/02/2010","01/02/2011","01/02/2012","01/02/2013");
	db.collection('roles', function(err, collection) {01
    for(var i=0;i<20;i++)
	{   
	    var roleId= "role" + i;
		var roleName= roleNameList[i%10]
		var latitude= latitudelist[i%3];
		var longtitude = longtitudelist[i%3];
		var userId ="user"+i;
		var iTemp1 = Math.floor(Math.random() * ( 10 + 1));
		var iTemp2 = Math.floor(Math.random() * ( 10 + 1));
		var userName =firstNameList[iTemp1] + " " + lastNameList[iTemp2];
		var photo ="resource/photos/" + i +".jpg";
		var compName=compNameList[i%10];
		var readiness =readinessList[i%5];
		var learningName =learningList[i%5];
		var label =labelList[i%2];
		var positionRoleName =roleNameList[i%10];
		var startDate =startDateList[i%7];
		var endDate =endDateList[i%7];

       var query = {"roleId":roleId,"roleName":roleName,"latitude":latitude,"longtitude":longtitude,"users":[{"userId":userId,"username":userName,"photo":photo,"competency":[{"compName":compName,"readiness":readiness,"Learning":[{"learningName":learningName,"label":label}]}],"PositionHistory":[{"roleName":positionRoleName,"startDate":startDate,"endDate":endDate}]}]};
		console.log('Retrieving role: ' + JSON.stringify(query));
    	collection.insert(query, {safe:true}, function(err, result) {});
	}
    });
	
}