module.exports = function(app, options){    
    var dao = require('../dao/roleDao');
    app.get('/api/roles', function(req, res, next){
        var latitude = req.params.latitude;
        var longitude = req.params.longtitude;
        var teamview = req.params.teamview;
        var query ={latitude:latitude};
        dao.getRoles(query, function(records){
            res.send(records);
        });
    });
};