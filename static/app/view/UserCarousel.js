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
                height:400,
                html: '<div id="chart1" style="width:330px;height:330px;display:inline-block"></div><div id="chart2" style="display:inline-block;width:330px;height:330px;"></div><div id="chart3" style="display:inline-block;width:330px;height:330px;"></div>'
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
                this.prepareChart();
                this.drawChart('viz/stacked_column', document.getElementById('chart1'));
                this.drawChart('viz/radar', document.getElementById('chart2'));
                this.drawChart('viz/waterfall', document.getElementById('chart3'));
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
        this.testData=this.testData||{
            'viz/stacked_column': {
                'analysisAxis': [                 
                    {
                        'index': 1,
                        'data': [{
                            'type': 'Dimension',
                            'name': 'Competency',
                            'values': ['Technology', 'Communication', 'Management', 'Documentation']
                        }]
                    }, {
                        'index': 2,
                        'data': [{
                            'type': 'Dimension',
                            'name': 'Learning',
                            'values': [ 'In Progress' , 'Finished']
                        }]
                    }],
                'measureValuesGroup' :[{
                    'index': 1,
                    'data': [{
                        'type': 'Measure',
                        'name': 'Competency',
                        'values': [[2, 1, 3, 1], [1, 0, 1, 1]]
                    }]
                }]},
            'viz/radar': {
                analysisAxis : [{
                    index : 1,
                    data : [{
                        type : "Dimension",
                        name : "",
                        'values': ['Technology', 'Communication', 'Management', 'Documentation']
                    }]
                }],
                
                measureValuesGroup : [{
                    index : 1,
                    data : [{
                        type : "Measure",
                        name : "Readiness",
                        values : [[ 80, 90, 50, 70 ] ]
                    }]
                }]
            }
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
                    'values' : [[2,3,4,5]]
                }]
            }]};
        this.testDataFeeding=this.testDataFeeding||{};
        this.chartInstanceSet=this.chartInstanceSet||{};
        this.dsInstance=this.dsInstance||new sap.viz.data.CrosstableDataset();
    },
    drawChart: function (chartId, element){
        this.dsInstance.setData(this.testData[chartId]);
        if(this.chartInstanceSet[chartId]){
            this.vizcore.destroyViz(this.chartInstanceSet[chartId]); //or chartInstance.destroy();        
            delete this.chartInstanceSet[chartId];
        }
        
        this.chartInstanceSet[chartId] = this.vizcore.createViz({
            type : chartId,
            data : this.dsInstance,
            container : element,
            options : this.chartOption,
            dataFeeding : this.testDataFeeding[chartId]
        });
    }
});