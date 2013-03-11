Ext.define('Kitchensink.view.UserCarousel', {
    extend: 'Ext.Panel',
    xtype: 'userCarousel',
    requires:['Kitchensink.components.CoolCarousel'],
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
                html: '<div class="userBox"><span id="userNameCon" class="name">Carla K Grant</span><span class="jobTitle">Senior Software Engineer</span><span class="division">Research & Development</span></div><div id="chart1" style="width:380px;height:330px;display:inline-block"></div><div id="chart2" style="display:inline-block;width:330px;height:330px;"></div><div id="chart3" style="display:inline-block;width:300px;height:330px;"></div>'
            }
        ]
     },
    initialize : function(){
        this.callParent();
        var carousel = Ext.getCmp('carousel');
        var chartArea = Ext.getCmp('chartArea');
        carousel.on(
            'selected', function(arg1, arg2){
                // Create a panel to put the chart in.
                $('#userNameCon').text(arg1.text);
                this.prepareChart();
                this.drawChart('viz/radar', document.getElementById('chart1'),'Competencies');
                this.drawChart('viz/stacked_column', document.getElementById('chart2'), 'Learning Activities');
                this.drawChart('viz/waterfall', document.getElementById('chart3'), 'Promote Hisotry');
            },
            this, {delay: 700}
        );
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
                        values : [this.randomArray(5, 20, 100) ]
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
    }
});