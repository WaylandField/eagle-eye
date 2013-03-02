Ext.define('Kitchensink.components.BingMap',{
    extend: 'Ext.Component',
    xtype:'bingmap',
    template: [{
        tag:"div",
        id:'mapDiv',
        reference: 'bingMap',
        cls: 'bingMap'
    }],
    initialize : function(){
        this.callParent();
        this.element.on({
            scope : this,
            painted : 'paint'
        });
    },
    paint : function(){
        var map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), 
                           {credentials: "Aqd4EL_e53fIbf3jO6B5E1yhIyPPT5Iq8Ct9cYBhXYmjqOcs-Sc7q8smG5GVE5wZ",
                            center: new Microsoft.Maps.Location(45.5, -122.5),
                            mapTypeId: Microsoft.Maps.MapTypeId.road,
                            zoom: 1});
        // Retrieve the location of the map center 
        var center = map.getCenter();
        
        // Add a pin to the center of the map
        var pin = new Microsoft.Maps.Pushpin(center, {text: '123',
                                                      htmlContent:'<a href="#"><font color="red">fefe</font></a>'
}); 

        // Create the infobox for the pushpin
        pinInfobox = new Microsoft.Maps.Infobox(pin.getLocation(), 
                                                {title: 'Shanghai Office', 
                                                 //description: 'This pushpin is located at (0,0).', 
                                                 visible: true, 
                                                 width:100,
                                                 height:60,
                                                 offset: new Microsoft.Maps.Point(0,15)});

        // Add the pushpin and infobox to the map
        map.entities.push(pin);
        map.entities.push(pinInfobox);

    }

});