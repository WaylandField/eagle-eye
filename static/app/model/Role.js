Ext.define('Kitchensink.model.Role',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'roleName', type:'string'},
            {name:'roleId', type:'int'},
            {name:'count', type:'int'},
            {name:'users', type:'array'}
        ],
        proxy: {
            type: "rest",
            url : "/api/role",
            reader: {
                type: "json",
                rootProperty: "roles"
            },
            writer: {
                type: 'json'
            }
        }
    },
    getCount: function(){
        if(this.get('users')){
            return this.get('users')?this.get('users').length:0;
        }else{
            return this.get('count');
        }
    }
});