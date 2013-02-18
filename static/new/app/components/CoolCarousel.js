Ext.define('Kitchensink.components.CoolCarousel',{
    extend:'Ext.Component',
    xtype:'coolCarousel',
    template : [
        {tag:'div',
        cls:'collCarousel'
        }
    ],
    initialize :function(){
        this.callParent();

        this.element.on({
            scope: this,
            painted: 'onPainted'
        });
     },
     onPainted : function(){
     // todo add your logic here
         var obj = this.element.dom.firstChild;
         obj.innerHTML = "add here";
     }
});