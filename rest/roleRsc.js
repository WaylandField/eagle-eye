module.exports = function(app, options){    
    var dao = require('../dao/roleDao');
	
	app.get('/api/role', function(req, res){
        console.log("jjj"+req.params);
        dao.getAllRoles(function(records){
            res.send(records);
        });
    });	
	
	 app.get('/api/role/:roleId', function(req, res, next){
        var roleId = req.params.roleId;
        console.log(req.params);
        var query ={'roleId':roleId};
        dao.getRoles(query, function(records){
            res.send(records);
        });
    });
	
	app.get('/api/role/:roleId/userCount', function(req, res){
        var roleId = req.params.roleId;
        console.log(req.params);
        var query ={'roleId':roleId};
        dao.getUsersCountOfRole(query, function(count){
		    console.log('count:' +count);
            res.send( JSON.stringify(count));
        });
    });	
	
	app.get('/api/user/:userId', function(req, res){
        var userId = req.params.userId;
        console.log(req.params);
        var query ={'users.userId':userId};
        dao.getRoles(query, function(records){
            res.send(records);
        });
    });	
	
	app.get('/api', dao.insertRoles); 
};