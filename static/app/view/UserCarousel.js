Ext.define('Kitchensink.view.UserCarousel', {
    extend: 'Ext.Panel',
    xtype: 'userCarousel',
    requires:['Kitchensink.components.CoolCarousel'],
    config : {layout: {
	        type: 'vbox'
	    },
	    items: [
            {xtype:'coolCarousel'}    
        ]
     }
});