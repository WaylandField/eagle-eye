module.exports = function(app, options){    
    var dao = require('../dao/roleDao');
	
	app.get('/api/role', function(req, res){
        console.log("jjj"+req.query.user);
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
	
	app.get('/api/role/office/:office', function(req, res){
        var office = req.params.office;
        console.log(req.params);
        var query ={office:office};
        dao.getRoles(query, function(records){
            res.send(records);
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