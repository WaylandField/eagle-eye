Ext.define('Kitchensink.model.User', {
    extend: 'Ext.data.Model',
    config: {
		fields: [
            {name: 'username', type:'string'},
            {name: 'userid', type:'string'},
            {name:'photo','type':'string'},
            {name: 'competency', 'type':'array'},
            {name: 'PositionHistory', type:'array'}
        ]
    }
});
