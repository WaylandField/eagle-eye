Ext.define('Kitchensink.view.OrgChartView',{
    extend: 'Ext.Component',
    xtype:'orgChartView',
    requires:['Kitchensink.components.OrgChart'],
    template: [{tag : 'canvas',
		        reference: 'orgChart',
		        cls: 'orgChart',
                width:1024,
                height:718
	           }],
    config:{
        layout:{
            type:'fit'
        }
    },
    items:[{
        id:'orgChart',
        xtype:'orgChart'}
    ]

});