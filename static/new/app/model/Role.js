Ext.define('Kitchensink.model.Role',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'name', type:'string'},
            {name:'count', type:'int'},
            {name:'id', type:'int'}
        ]
    }
});