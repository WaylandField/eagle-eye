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
         this.carousel = new Kitchensink.util.CoolCarousel();
         this.carousel.create('myCanvas','resources/testdata/config.xml');
         this.carousel.on(
             'selected', function(arg1, arg2){
                 console.log(arg1);
                 console.log(arg2);
                 alert('jiji');
             }
         );

     }
});