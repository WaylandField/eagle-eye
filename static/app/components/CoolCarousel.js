Ext.define('Kitchensink.components.CoolCarousel',{
    extend:'Ext.Component',
    xtype:'coolCarousel',
	template: [{tag : 'canvas',
		reference: 'carouselchart',
        cls:'coolCarousel',
        width:1024,
        height:350,
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
         var that = this;
     // todo add your logic here
         this.carousel = new Kitchensink.util.CoolCarousel();
         this.carousel.create('myCanvas','resources/testdata/config.xml');
         this.fireEvent('selected', {text:'Hall Xu', readiness:90});
         this.carousel.on(
             'selected', function(arg1, arg2){
                 that.fireEvent('selected', arg1);
                 console.log(arg1);
             }
         );
     },
    gotoItem : function(index){
        this.carousel.gotoItem(index);
    }
    
});