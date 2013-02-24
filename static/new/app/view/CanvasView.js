Ext.define('Kitchensink.view.CanvasView', {
    extend: 'Ext.Panel',
    xtype: 'canvas',
    requires:['Kitchensink.components.StarChart','Kitchensink.components.ProgressBar'],
    config : {
        refs: {
            nav: '#reportsNavi'
        },
        layout: {
	        type: 'fit'
	    },
	    items: [
            {
                xtype:'starchart',
                width:1024,
                height:680
            }/**,
            {
                docked: 'bottom',
                xtype:'sliderfield',
                label:'Team View',
                value: 50,
                minValue: 0,
                maxValue: 100
            }**/
        ]
    },
    initialize : function(){
        this.callParent();
        var toolbar = Ext.getCmp('mainNavigationBar');
        toolbar.add({
            iconCls : 'action',
            align: 'right',
            title: 'Map'
        });
    }
    
});
