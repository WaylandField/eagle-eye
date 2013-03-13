Ext.define('Kitchensink.view.UserCarousel', {
    extend: 'Ext.Panel',
    xtype: 'userCarousel',
    requires:['Kitchensink.components.CoolCarousel','Kitchensink.components.AutoComplete'],
    config : {layout: {
	        type: 'vbox'
	    },
	    items: [
            {   id: 'carousel',
                xtype:'coolCarousel'
            },
            {
                id: 'chartArea',
                xtype:'panel',
                height:420,
                html: '<div class="userBox" id="userBoxCon"><div style="display:inline-block;text-align:right"><span id="userNameCon" class="name"></span><br><span class="jobTitle">Senior Software Engineer</span><span class="division">Research & Development</span></div><span class="readiness" id="readiness"></span><span class="role"></span></div><div id="chart1" style="width:380px;height:330px;display:inline-block"></div><div id="chart2" style="display:inline-block;width:330px;height:330px;"></div><div id="chart3" style="display:inline-block;width:300px;height:330px;"></div>'
            }
        ]
     },
    initialize : function(){
        this.callParent();

        var that = this;
        var carousel = Ext.getCmp('carousel');
        var chartArea = Ext.getCmp('chartArea');
        carousel.on(
            'selected', function(arg1, arg2){
                // Create a panel to put the chart in.
                if(arg1)$('#userNameCon').text(arg1.text);
                $('#userBoxCon').show();
                this.prepareChart();
                this.drawChart('viz/radar', document.getElementById('chart1'),'Competencies Readiness');
                this.drawChart('viz/stacked_column', document.getElementById('chart2'), 'Learning Activities');
                this.drawChart('viz/waterfall', document.getElementById('chart3'), 'Career Path');
            },
            this, {delay: 700}
        );


        var toolbar = Ext.getCmp('mainNavigationBar');
        if(toolbar.backBtn){
            toolbar.backBtn.show();
        }
        if(!toolbar.topBtn){
            toolbar.topBtn = Ext.create('Ext.Button',{
                id: 'topBtn',
                align : 'right',
                ui    : 'action',
                text:'Most Matched'
            });
            toolbar.add([toolbar.topBtn]);
        }else{
            toolbar.topBtn.show();
        }
        if(!toolbar.addBtn){
            toolbar.addBtn = Ext.create('Ext.Button',{
                id: 'addLAButton',
                align : 'right',
                ui    : 'action',
                action: 'showMap',
                text:'Add Learning'
            });
            toolbar.add([toolbar.addBtn]);
        }
        if(!toolbar.addMeet){
            toolbar.addMeet = Ext.create('Ext.Button',{
                id: 'addMeet',
                align : 'right',
                ui    : 'action',
                action: 'showMeet',
                text:'Meeting Requests'
            });
            toolbar.add([toolbar.addMeet]);
        }else{
            toolbar.addMeet.show();
        }
        if(!toolbar.searchField){
            toolbar.searchField = Ext.create('Ext.field.Text',{
                label: 'Search',
                align: 'right',
                name: 'lastName',
                listeners: {
                    keyup : function(o, e){
                        if(e.event.keyCode==13){
                            var index = that.getUserIndex(this.getValue());
                            if(index!=null) carousel.gotoItem(index);
                        }
                    }
                }
            });
            toolbar.add([toolbar.searchField]);
        }
        if(toolbar.mapBtn){
            toolbar.mapBtn.hide();
        }
        toolbar.setTitle("");
//        var mapBtn = Ext.getCmp('mapbutton');
//        mapBtn.hide();
//        toolbar.add([
//            {
//                xtype : 'button',
//                id: 'addLAButton',
//                align : 'right',
//                ui    : 'action',
//                action: 'showMap',
//                text:'Add Learning'
/**            },
            {
                xtype: 'textfield',
                label: 'Search',
                align: 'right',
                name: 'lastName',
                listeners: {
                    keyup : function(o, e){
                        if(e.event.keyCode==13){
                            var index = that.getUserIndex(this.getValue());
                            if(index!=null) carousel.gotoItem(index);
                        }
                    }
                }
            }
        ]);
**/

    },
    prepareChart : function(){
        // Create a panel to put the chart in.
		this.Environment=this.Environment||sap.viz.env;
        this.vizcore=this.vizcore||sap.viz.core;
        this.chartOption=this.chartOption||{
            multiLayout: {
                'numberOfDimensionsInColumn': 1
            },
            plotArea:{
                isRoundCorner: true
            },     
            title: {
                visible: true,
                text: 'Learning Activities'
            }
        };
        this.testData={
            'viz/stacked_column': {
                'analysisAxis': [                 
                    {
                        'index': 1,
                        'data': [{
                            'type': 'Dimension',
                            'name': 'Competency',
                            'values': ['Tech', 'Comm', 'Mgmt', 'Doc', 'Lang']
                        }]
                    }, {
                        'index': 2,
                        'data': [{
                            'type': 'Dimension',
                            'name': 'Learning',
                            'values': [ 'To Do' , 'Done']
                        }]
                    }],
                'measureValuesGroup' :[{
                    'index': 1,
                    'data': [{
                        'type': 'Measure',
                        'name': 'Competency',
                        'values': [this.randomArray(5, 0, 4), this.randomArray(5, 0, 2)]
                    }]
                }]}};
        var rArray = this.randomArray(5, 20, 100);
        var su = 0;
        for(var k in rArray){
            su+=rArray[k];
        }
        $('#readiness').text((su/rArray.length)+"% Ready");
        this.testData['viz/radar']= {
            analysisAxis : [{
                index : 1,
                data : [{
                    type : "Dimension",
                    name : "",
                    'values': ['Tech', 'Comm', 'Mgmt', 'Doc', 'Lang']
                }]
            }],
            
            measureValuesGroup : [{
                index : 1,
                data : [{
                    type : "Measure",
                    name : "R",
                    values : [rArray]
                }]
            }]
        };
        this.testData['viz/waterfall'] =       {
            'analysisAxis': [{
                
                'index' : 1,
                'data' : [{
                    'type' : 'Dimension',
                    'name' : 'JobTitle',
                    'values' : ['SE', 'SSE', 'LSE', 'Principle']
                }]
            }], 
            'measureValuesGroup':[{
                'index' : 1,
                'data' : [{
                    'type' : 'Measure',
                    'name' : 'Years',
                    'values' : [this.randomArray(4, 1, 6)]
                }]
            }]};
        this.testDataFeeding=this.testDataFeeding||{};
        this.chartInstanceSet=this.chartInstanceSet||{};
        this.dsInstance=this.dsInstance||new sap.viz.data.CrosstableDataset();
    },
    drawChart: function (chartId, element, title){
        this.dsInstance.setData(this.testData[chartId]);
        if(this.chartInstanceSet[chartId]){
            this.vizcore.destroyViz(this.chartInstanceSet[chartId]); //or chartInstance.destroy();        
            delete this.chartInstanceSet[chartId];
        }
        this.chartOption.title.text = title;
        this.chartInstanceSet[chartId] = this.vizcore.createViz({
            type : chartId,
            data : this.dsInstance,
            container : element,
            options : this.chartOption,
            dataFeeding : this.testDataFeeding[chartId]
        });
    },
    randomArray: function(length, min, max){
        var r = [];
        for(var i=0;i<length;i++){
            r.push(Math.ceil(Math.random() * (max-min)) + min);
        }
        console.log(r);
        return r;
    },
    getUserIndex : function(str){
        var users = [ 'Hall Xu',
                      'Zora Green',
                      'Sanchez Brown',
                      'Emilie Huang',
                      'Hiller Baker',
                      'lei Roman',
                      'Sheila Baker',
                      'lei Brown',
                      'Sigrid Rogers',
                      'Diana Huang',
                      'Emilie Smith',
                      'Diana Richard',
                      'Hiller Smith',
                      'Shirley Liu',
                      'Johnson Brown',
                      'Liz Green',
                      'Tom Johnson',
                      'Garcia Black',
                      'Sigrid Green',
                      'Debby Jones',
                      'Adams Huang',
                      'Tom Xu',
                      'Spring Johnson',
                      'Debby Rogers',
                      'Bright Richard',
                      'Anderson Hu',
                      'Rose Brown',
                      'Shirley Li',
                      'Daniel Li',
                      'Zora Long',
                      'Spring Yang',
                      'Kaushik Yang',
                      'Lara Roman',
                      'Susan Long',
                      'Emilie Williams',
                      'Sigrid Rogers',
                      'Zona Davis',
                      'Johnson Black',
                      'Elias Ronaldo',
                      'Lara DuanMu',
                      'Johnson Xu',
                      'peter Long'];
        if(this.searchItem!==str){
            this.searchItem = str;
            this.index = 0;
        }
        for(var i = this.index+1; i<users.length;i++){
            var user = users[i];
            if(user.toLowerCase().indexOf(this.searchItem.toLowerCase())!==-1){
                this.index = i;
                return i;
            }
            if(i>=users.length-1){
                this.index = 0;
            }
        }
        return null;
    }
});