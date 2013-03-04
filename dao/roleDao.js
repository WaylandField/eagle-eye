var db = require('../db').getDb();

exports.getAllRoles = function(callback) {
    db.roles.find({}, function(err, roles) {
        callback.call(callback, roles);
    });
};

exports.getRoles = function(query, callback) {
    db.roles.find(query, function(err, roles) {
        callback.call(callback, roles);
    });
};

exports.getUsersCountOfRole = function(query, callback)
{
	 var iCount = 0;
     db.roles.find(query, function(err, roles){
        roles.forEach(function(users){
			iCount++;
			console.log('count:' +iCount);
        });
        callback.call(callback, iCount);
    });
}

exports.insertRoles=function()
{
    var roleNameList= new Array("Dev manager", "QA Manager", "QA Lead","Senior QA", "Junior Developer", "Senior Developer","UI Lead","UI desinger","Project manager","DBA");
	var latitudelist = new Array("40N","51N","25N");
	var longtitudelist = new Array("80E","10W","120E");
	var firstNameList= new Array("Bing", "Michael", "Lucy","Kaushik", "Tom", "Hiller","David","Rose","peter","Daniel","lei","Johnson","William","Brown","Miller","Garcia","Martinez","Anderson","Moore","Lopez","Clark","Robinson","Walker","Hall","Allen","Sanchez","Scott","Adams","Campbell","Evans","Lucas","Tim","Luca","Max","Ben","Jan","Elias","Lara","Emma","Emilie","Leah","Diana","Debby","Maggie","Lynn","Liz","Lisa","Lindsay","Sheery","Sheila","Shirley","Sigrid","Sibyl","Sophia","Spring","Susan","Zona","Zora","Yetta","Xavi","Xanthe","Bright","Talent");
	var lastNameList= new Array("Smith", "Roman", "Tian","Yang", "Huang", "Xu","Ronaldo","Rogers","Hu","Liu","Li","DuanMu","Wood","Richard","Green","Long","Baker","Williams","Davis","Black","Jones","Brown","Johnson");
    var compNameList = new Array( "Budgets/Cost Control", "Communication", "Computer Skills","Innovation", "Customer Focus", "People Development","programming","documentation","English","Email");
	var readinessList = new Array("25%","50%","75%","100%","0%");
	var learningList = new Array("Java Programming","Database","Project management","How to be professional","Good Presentation");
	var labelList = new Array("complete","Not Ready");
	var startDateList = new Array("01/02/2006","01/02/2007","01/02/2008","01/02/2009","01/02/2010","01/02/2011","01/02/2012");
	var endDateList = new Array("01/02/2008","01/02/2008","01/02/2010","01/02/2010","01/02/2011","01/02/2012","01/02/2013");
     
 
	var roleId= "role_048";
	var iTempRoleName = Math.floor(Math.random() * ( 9 + 1));
	var roleName= roleNameList[iTempRoleName];
	var iTempLatitude = Math.floor(Math.random() * ( 2 + 1));
	var latitude= latitudelist[iTempLatitude];
	var longtitude = longtitudelist[iTempLatitude];
	
	var userArrayList = new Array();
	for(var i=0;i<48;i++)
	{   
	    var j= i+ 403;
		var userId ="user_"+ j;
		var iTemp1 = Math.floor(Math.random() * ( 62 + 1));
		var iTemp2 = Math.floor(Math.random() * ( 22 + 1));
		var userName =firstNameList[iTemp1] + " " + lastNameList[iTemp2];
		var photo ="resource/photos/" + j +".jpg";
		var compName=compNameList[i%10];
		var readiness =readinessList[i%5];
		var learningName =learningList[i%5];
		var label =labelList[i%2];
		var positionRoleName =roleNameList[i%10];
		var startDate =startDateList[i%7];
		var endDate =endDateList[i%7];
		
		userArrayList[i] ={"userId":userId,"username":userName,"photo":photo,"competency":[{"compName":compName,"readiness":readiness,"learning":[{"learningName":learningName,"label":label}]}],"positionHistory":[{"roleName":positionRoleName,"startDate":startDate,"endDate":  endDate}]};
	}

    var query = {"roleId":roleId,"roleName":roleName,"latitude":latitude,"longtitude":longtitude,"users":userArrayList};
	console.log('Retrieving role: ' + JSON.stringify(query));
	db.roles.insert(query, {safe:true}, function(err, result) {});
	
};