module.exports = function(app, options){    
    var dao = require('../dao/roleDao');
	
	app.get('/api/role', function(req, res){
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
	
	app.get('/api', dao.insertRoles); 
};