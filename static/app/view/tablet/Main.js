Ext.define('Kitchensink.view.tablet.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.dataview.NestedList',
        'Ext.navigation.Bar',
        'Kitchensink.view.RoleView',
		'Kitchensink.view.CanvasView'
    ],

    config: {
        fullscreen: true,

        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },

        items: [
            {
                id: 'mainNavigationBar',
                xtype : 'titlebar',
                docked: 'top',
                title : 'Eagle Eyes'
            },
            {
                id: 'launchscreen',
                cls : 'container',
                items: [
					{
					    xtype : 'canvas'
					}
                ]
            },{
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
    }
});


