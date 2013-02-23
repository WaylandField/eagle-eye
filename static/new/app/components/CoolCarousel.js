Ext.define('Kitchensink.components.CoolCarousel',{
    extend:'Ext.Component',
    xtype:'coolCarousel',
	template: [{tag : 'canvas',
		reference: 'starchart',
        cls:'coolCarousel',
        width:1024,
        height:768,
        id : 'myCanvas'
	}],
    requires : ['Kitchensink.util.CoolCarousel'],
    initialize :function(){
        this.callParent();

        this.element.on({
            scope: this,
            painted: 'onPainted'
        });
     },
     onPainted : function(){
     // todo add your logic here
         this.carousel = Kitchensink.util.CoolCarousel.create('myCanvas','resources/testdata/config.xml');
     }
});