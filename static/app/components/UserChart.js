Ext.define('Kitchensink.components.UserChart',{
    extend : 'Ext.Component',
    xtype : 'userChart',
    template :[{
       tag : 'div',
       cls : 'userChart'
    }],
    initialize : function(){
        this.callParent();
        this.element.on({
            scope : this,
            painted : 'paint'
        });
    },
    paint : function(){
        
    }
});