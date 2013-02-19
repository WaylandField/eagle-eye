Ext.define('Kitchensink.components.StarChart',{
	extend: 'Ext.Component',
	xtype: 'starchart',
    requires :['Kitchensink.util.Utils'],
	template: [{tag : 'canvas',
		reference: 'starchart',
		cls: 'starChart',
        width:1024,
        height:768
	}],
    initialize : function(){
        this.callParent();

        this.element.on({
            scope : this,
            painted: 'onPainted'
        });
        this._store = Ext.getStore("roleStore");
        this.ROLE_WIDTH = 100;
        this.ROLE_HEIGHT=60;
        this.MIN_GAP = 10;
        this.OFFSET_INDEX=0;
        this.COLOR_INDEX=0;
    },
    onPainted: function(){
        this._roles = this._store.get('mockData');
        this._groups = Kitchensink.util.Utils.kmeans(this._roles, 'count', 5);
        this._prepareData();
        this._drawGraph();
    },
    _getBubbleR : function(count, min){
        return min?(count>this.MIN_GAP?count:this.MIN_GAP):count;
    },
    _checkOverlap : function(x1,y1,r1,x2,y2,r2){
        var xDif = Math.abs(x1-x2);
        var yDif = Math.abs(y1-y2);
        return xDif<this.ROLE_WIDTH&&yDif<this.ROLE_HEIGHT||((xDif*xDif+yDif*yDif)<(r1+r2)*(r1+r2));
    },
    _getStartDegree : function(){
        if(this._degreeIndex==null){
            this._degreeIndex = 0;
        }
        this._degreeIndex++;
        return 60*(this._degreeIndex%6);
    },
    _prepareData : function(){
        var groups = this._groups;
        var pos = {}, curPos;
        this._bubbles = [];
        this._borders = [];
        var step = 0;
        var globalR = 0;
        var globalBorder =0;
        var r = 0,x,y;
        var degree = 0;
        var degreeStep = 10;
        var group;
        for(var i=0;i<groups.length;i++){
            group=groups[i];
            degree = this._getStartDegree();
            r = this._getBubbleR(group[0].count, true);
            if(i===0){
                if((group&&group.length<2||group.length>3)){
                    globalR = 0;
                }else{
                    //globalBorder = r;
                }
            }else{
                globalBorder+=3;
                globalR = globalBorder+r;
                globalBorder+=2*r;
            }
            this.degreeCrossed = 0;
            for(var j=0;j<group.length;j++){
                var positioned = false;

                while(!positioned){
                    if(this.degreeCrossed>=360){
                        this.degreeCrossed=0;
                        degree = this._getStartDegree();
                        r=this._getBubbleR(group[j].count, true);
                        globalR = globalBorder+5;
                        globalBorder+=5+r;
                    }

                    x=Math.cos(degree)*globalR; 
        			y=Math.sin(degree)*globalR; 

                    positioned = true;
                    curPos = {
                        x:x, 
        			    y:y, 
        			    r: this._getBubbleR(group[j].count)
                    };
                    for(var k=0;k<this._bubbles.length;k++){
                        pos = this._bubbles[k].pos;
                        if(this._checkOverlap(curPos.x,curPos.y,curPos.r, 
                                              pos.x,pos.y,pos.r)){
                            positioned = false;
                            break;
                        }
                    }

       	            positioned&&this._bubbles.push({pos:curPos, data:group[j], group:i});
                    degree += degreeStep;
                    this.degreeCrossed +=degreeStep;
                }
            }
           globalBorder+=3;
            this._borders.push(globalBorder);
        }
    },
    _drawGraph : function(){
        var canvas = this.element.dom.firstChild;   
        if (canvas.getContext){  
            var ctx = canvas.getContext('2d');  
        }
        var titleArray = [];
        var x=canvas.width/2,y=canvas.height/2;
        var color_i=0;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        var orbit = this._borders;
        ctx.strokeStyle="rgba(199,199,199, 0.2)";
        ctx.shadowColor='black';
        ctx.shadowBlur=20;
        var r=204, g=255, b=204;
        for(var i=orbit.length-1;i>=0;i--){
            ctx.beginPath(); 
            ctx.arc(x,y,orbit[i],0,Math.PI*2 ,false); // Outer circle 
            ctx.closePath();
//            var color = this._getColor(i);
//            ctx.fillStyle="rgba("+color[0]+","+color[1]+","+color[2]+", "+(orbit.length-i)/orbit.length+")";
            ctx.fillStyle="rgba("+r+","+g+","+b+", "+(orbit.length-i)/orbit.length+")";
            ctx.fill();
            ctx.stroke();
        }
        
        var circles = this._bubbles;
        var offset = this._getOffset();
        for(var i=0;i<circles.length;i++){
            var pos = circles[i].pos;
            var data = circles[i].data;
            var bubbleX = pos.x+x+offset[0];
            var bubbleY = pos.y+y+offset[1];
            var color = this._getColor(circles[i].group);
            var radius = pos.r;
//            ctx.clearShadow();
            ctx.shadowBlur=1;
            if(radius<=2){
                ctx.fillStyle="rgba("+color[0]+", "+color[1]+", "+color[2]+", 0.5)";
            }else{
                var grd = ctx.createRadialGradient(bubbleX-radius/Math.sqrt(2),bubbleY+radius/Math.sqrt(2),2*radius-5,bubbleX+radius/Math.sqrt(2),bubbleY-radius/Math.sqrt(2),5);
                grd.addColorStop(0,"rgba("+color[0]+", "+color[1]+", "+color[2]+", 0.5)");
                grd.addColorStop(1,"white");
                ctx.fillStyle=grd;
            }
            ctx.strokeStyle="rgba("+color[0]+", "+color[1]+", "+color[2]+", 1)";
            ctx.beginPath();  
            ctx.arc(pos.x+x+offset[0],pos.y+y+offset[1],pos.r,0,Math.PI*2 ,false); // Outer circle  
            ctx.closePath();  
            ctx.stroke();
            ctx.fill();
            ctx.fillStyle="#ff0000";
            ctx.font="bold 15pt Calibri";
            ctx.shadowColor="white";
            ctx.shadowBlur = 10;
            ctx.fillText(data.count,pos.x+x+offset[0],pos.y+y+offset[1]);
            ctx.fillStyle="#ffffff";
            ctx.font="normal 9pt Calibri";
            ctx.shadowColor="black";
            ctx.shadowBlur = 6;
            ctx.fillText(data.name,pos.x+x+offset[0],pos.y+y+offset[1]+10);
        }
    },
    _getColor : function(i){
        var colors = [
            [100,230,1],//bright green
            [22,67,99],//blue
            [120,90,60],
            [66,250,11],
            [99,200,10],
            [30,90,150],
            [60,90,120],
            [120,90,60],
            [30,90,150],
            [150,30,90],
            [30,90,180],
            [100,230,1],
            [22,67,99],
            [66,43,97],
            [99,200,10],
            [66,250,11]
        ];
//        this.COLOR_INDEX = (this.COLOR_INDEX+1) % 10;
        return colors[i];
    },

    _getOffset: function(){
        var jj =[[1,1],[0,0],[-1,-1]];
        this.OFFSET_INDEX=(this.OFFSET_INDEX+1)%3;
        return jj[this.OFFSET_INDEX];
    }

    
});

