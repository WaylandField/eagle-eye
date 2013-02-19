Ext.define('Kitchensink.view.CanvasView', {
    extend: 'Ext.Panel',
    xtype: 'canvas',
    requires:['Kitchensink.components.StarChart'],
    config : {layout: {
	        type: 'fit'
	    },
	    items: [
            {xtype:'starchart',
            store:'roleStore'}
        ]}
});
