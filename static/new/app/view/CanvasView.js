Ext.define('Kitchensink.view.CanvasView', {
    extend: 'Ext.Panel',
    xtype: 'canvas',
    requires:['Kitchensink.components.StarChart'],
    config : {
        layout: {
	        type: 'vbox'
	    },
	    items: [
            {
                xtype:'starchart',
                store:'roleStore'
            }
        ]
    }
    
});
