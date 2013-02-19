Ext.define('Kitchensink.store.Roles',{
    alias : 'store.Roles',
    extend: 'Ext.data.Store',
    requires : ['Kitchensink.model.Role'],
    config:{
        storeId:'roleStore',
        model: 'Kitchensink.model.Role',
        mockData : [
		              {name:"Dev Manager",count:86,id:1},
		             {name:"Product Manager",count:38,id:2},
		            	               {name:"Senior Software Engineer",count:30,id:3},
		            	               {name:"Senior Sales",count:32,id:4},
		            	              {name:"CEO",count:28,id:5},
		            	               {name:"Sales Manager",count:22,id:6},
		            	               {name:"Achitect",count:21,id:7},
		            	               {name:"CTO",count:23,id:8},
		            	               {name:"Senior QA",count:22,id:9},
		            	               {name:"QA Manager",count:22,id:10},
		            	              {name:"Sales",count:12,id:11},
		            	               {name:"Senior Customer Support Expert",count:19,id:12},
		            	               {name:"DBA",count:16,id:13},
		            	               {name:"Office Admin",count:17,id:14},
		            	               {name:"IT Export",count:11,id:15},
		            	               {name:"Product Service Expert",count:35,id:16},
		            	              {name:"programmer",count:9,id:17},
		            	               {name:"Sales",count:8,id:18},
		            	               {name:"UI Developer",count:8,id:19},
		            	               {name:"Java Developer",count:2,id:20},
		            	               {name:"Project owner",count:1,id:21}]
    }
});