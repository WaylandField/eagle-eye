Ext.define('Kitchensink.components.OrgChart', {
    extend: 'Ext.Component',
    xtype:'orgChart',
    templates:[
        {tag : 'canvas',
		 reference: 'starchart',
		 cls: 'starChart',
         width:1024,
         height:718
	    }
    ],
    initialize : function(){
        this.callParent();
        
        this.element.on({
            scope: this,
            painted : 'paint',
            tap:'onTap'
        });

        this._store = Ext.getStore("userStore");
    },
    onTap: function(){
        this._user = {username:'Carla K Grant', photo:'0e17f3969f5d291d12753ea8fb99433c.jpg', reports:[
            {username:'Miracle Ouyang', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Jian Ren', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Ouyang Xiao Jian', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Miracle Sao Sao', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg', reports:[
            {username:'Miracle Yin Yin', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Cui Xue Ouyang', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'},
            {username:'Xi Men Ouyang', photo:'16ec8e470d3941e6662ffe2b8a778ef4.jpg'}
            ]}
        ]};
        //choose a
         var canvas = this.element.dom.firstChild;   
        if (canvas.getContext){  
            var ctx = canvas.getContext('2d');  
        }
        var titleArray = [];
        var x=canvas.height/2,y=canvas.height/2;
        var color_i=0;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        var width = 60;
        var height = 80;
        var radius = 50;
        var img = new Image();
        dragon.src = 'images/chinese_dragon.png';
    }
    
});