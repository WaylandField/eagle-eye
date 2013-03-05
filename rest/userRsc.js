module.exports = function(app, options){
    app.get('/api/user', function(req, res){
        var mockData = {username:'Carla K Grant', photo:'0e17f3969f5d291d12753ea8fb99433c.jpg', reports:[
            {username:'Miracle Ouyang', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Jian Ren', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Ouyang Xiao Jian', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Miracle Sao Sao', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg', reports:[
            {username:'Miracle Yin Yin', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Cui Xue Ouyang', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Xi Men Ouyang', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'}
            ]}
        ]};
        res.send(mockData);
    });
};