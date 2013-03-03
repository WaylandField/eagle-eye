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
    },
    onTap: function(){
        
    }
    
});