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
        var that = this;
        var geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: false,
            listeners: {
                locationupdate: function(geo) {
                    that.location= {latitude:geo.getLatitude(), longitude: geo.getLongitude()};
                    that._paintMap();
                },
                locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                    if(bTimeout){
                        alert('Timeout occurred.');
                    }else if(bPermissionDenied){
                        alert('no perm');
                    } else {
                        alert('Error occurred.');
                    }
                }
            }
        });
        geo.updateLocation();
    },
    _paintMap : function(){
        var that = this;
        var offices = [
            {name:'Pavilion Office', latitude:51, longitude:9, count:'20'},
            {name:'San Mateo Office', latitude:37.563, longitude:-122.3255, count:'20'},
            {name:'Shanghai Office', latitude:31.2, longitude:121.4, count:'80'},
            {name:'Arlington Office', latitude:32.74, longitude:-97.11, count: '30'},
            {name:'Bangalore Office', latitude:12.98, longitude:77.58, count: '30'}
        ];
        var cenLoc = this.location|| {latitude:51, longitude: 9};
        this.map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), 
                           {credentials: "Aqd4EL_e53fIbf3jO6B5E1yhIyPPT5Iq8Ct9cYBhXYmjqOcs-Sc7q8smG5GVE5wZ",
                            center: new Microsoft.Maps.Location(cenLoc.latitude, cenLoc.longitude),
                            mapTypeId: Microsoft.Maps.MapTypeId.road,
                            zoom: 1});
        // Retrieve the location of the map center 
        var center = this.map.getCenter();
        for(var k in offices){
            var office = offices[k];
            var loc = new Microsoft.Maps.Location(office.latitude,office.longitude);
            var pin = new Microsoft.Maps.Pushpin(loc, {text: office.count});
            var pinInfoBox = new Microsoft.Maps.Infobox(
                pin.getLocation(), 
                {title: office.name, 
                 //description: 'This pushpin is located at (0,0).',
                 htmlContent:'<b>Custom HTML</b>',
                 visible: false, 
                 width:100,
                 height:60,
                 offset: new Microsoft.Maps.Point(0,15)}
            );
            pin.infobox = pinInfoBox;
            // Add handler for the pushpin click event.
            Microsoft.Maps.Events.addHandler(pin, 'click', function(){
                that.fireEvent('change');
                this.target.infobox.setOptions({ visible:true });
            });
            // Hide the infobox when the map is moved.
//            Microsoft.Maps.Events.addHandler(this.map, 'viewchange', function(){
//                pinInfoBox.setOptions({ visible:false });
//            });

            this.map.entities.push(pin);
            this.map.entities.push(pinInfoBox);
        }
    }

});