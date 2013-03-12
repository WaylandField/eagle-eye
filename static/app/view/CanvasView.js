Ext.define('Kitchensink.view.CanvasView', {
    extend: 'Ext.Panel',
    xtype: 'canvas',
    requires:['Kitchensink.components.StarChart','Kitchensink.components.BingMap'],
    config : {
        refs: {
            nav: '#reportsNavi'
        },
        layout: {
	        type: 'fit'
	    },
	    items: [
            {
                id:'roleChart',
                xtype:'starchart',
                width:1024,
                height:718
            }/**,
            {
                docked: 'bottom',
                xtype:'sliderfield',
                label:'Team View',
                value: 50,
                minValue: 0,
                maxValue: 100
            }**/
            ,{
                id:'popupDialog',
                xtype: 'panel',
                layout:'fit',
                // We give it a left and top property to make it floating by default
                right: 0,
                top: 0,

                // Make it modal so you can click the mask to hide the overlay
                modal: true,
                hideOnMaskTap: true,

                // Make it hidden by default
                hidden: true,
                border:false,

                // Set the width and height of the panel
                width: 550,
                height: 400,

                // Insert a title docked at the top with a title
                items: [
                ]
            }
        ]
    },
    initialize : function(){
        this.callParent();
        var toolbar = Ext.getCmp('mainNavigationBar');
        toolbar.setTitle("Direct Reports Target Role Distribution @ Shanghai");
        if(!toolbar.mapBtn){
            var mapBtn = Ext.create('Ext.Button', {
                id: 'mapbutton',
                align : 'right',
                ui    : 'action',
                action: 'showMap',
                text:'Map'
            });
            toolbar.mapBtn = mapBtn;
            toolbar.add(mapBtn);
        }
        if(!toolbar.backBtn){
            var backBtn = Ext.create('Ext.Button', {
                id: 'backBtn',
                align : 'left',
                action: 'back',
                text:' < Back',
                hidden:true
            });
            toolbar.backBtn = backBtn;
            toolbar.add(backBtn);
        }
/**        toolbar.add({
            xtype : 'button',
            id: 'mapbutton',
            align : 'right',
            ui    : 'action',
            action: 'showMap',
            text:'Map'
        });**/
    }
    
});
