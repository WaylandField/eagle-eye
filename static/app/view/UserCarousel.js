Ext.define('Kitchensink.view.UserCarousel', {
    extend: 'Ext.Panel',
    xtype: 'userCarousel',
    requires:['Kitchensink.components.CoolCarousel'],
    config : {layout: {
	        type: 'fit'
	    },
	    items: [
            {xtype:'coolCarousel'}    
        ]
     }
});