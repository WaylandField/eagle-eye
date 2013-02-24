module.exports = function(app, options){    
    var dao = require('../dao/roleDao');
    app.get('/api/role/latitude/:latitude/longitude/:longitude/teamview/:teamview', function(req, res, next){
        var latitude = req.params.latitude;
        console.log(req.params);
        var longitude = req.params.longtitude;
        var teamview = req.params.teamview;
        var query ={name:'miralce'};
        dao.getRoles(query, function(records){
            res.send(records);
        });
    });
};