Ext.define('Kitchensink.components.StarChart',{
	extend: 'Ext.Component',
	xtype: 'starchart',
    requires :['Kitchensink.util.Utils'],
	template: [{tag : 'canvas',
		reference: 'starchart',
		cls: 'starChart',
        width:1024,
        height:718
	}],
    initialize : function(){
        this.callParent();

        this.element.on({
            scope : this,
            painted: 'paint',
            tap:'onTap'
        });
        this._store = Ext.getStore("roleStore");
        this.CHART_WIDTH = 700;
        this.ROLE_WIDTH = 100;
        this.ROLE_HEIGHT=60;
        this.MIN_GAP = 10;
        this.OFFSET_INDEX=0;
        this.COLOR_INDEX=0;
    },
    onTap: function(e){
        var x = e.pageX;
        var y = e.pageY-50;
        var temp = 0, temp1=null, closestBubble;
        for(var i=0;i<this._bubbles.length;i++){
            var bub = this._bubbles[i];
            temp=(bub.pos.x-x)*(bub.pos.x-x)+(bub.pos.y-y)*(bub.pos.y-y);
            if(temp>400) continue;
            if(temp1==null){
                temp1=temp;
            }
            if(temp<=temp1){
                temp1=temp;
                closestBubble = bub;
            }
        }
        if(closestBubble){
            this.fireEvent('roleSelected', closestBubble.data);
        }
    },
    paint: function(){
        var that = this;
        that._roles = that._store.randomMockData();
        that._groups = Kitchensink.util.Utils.kmeans(that._roles, 'getCount', 5);
        that._prepareData();
        that._drawGraph();
        return ;
        
        var oper = {
            'action':'read',
            'filters':[Ext.create('Ext.util.Filter', {
                property: 'latitude',
                value   : 12306
            })],
            'limit':20,
            'callback':function(records, operation, success){
                that._roles = records;//that._store.randomMockData();
                that._groups = Kitchensink.util.Utils.kmeans(that._roles, 'getCount', 5);
                that._prepareData();
                that._drawGraph();
            }
        };
        this._store.load(oper);
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
    fitSize : function(){
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
            r = this._getBubbleR(group[0].getCount(), true);
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
                        r=this._getBubbleR(group[j].getCount(), true);
                        globalR = globalBorder+5;
                        globalBorder+=5+r;
                    }

                    x=Math.cos(degree)*globalR; 
        			y=Math.sin(degree)*globalR; 

                    positioned = true;
                    curPos = {
                        x:x, 
        			    y:y, 
        			    r: this._getBubbleR(group[j].getCount())
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
        }
        return this.CHART_WIDTH/globalBorder;
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
            if(group.length<=0) continue;
            degree = this._getStartDegree();
            r = this._getBubbleR(group[0].getCount(), true);
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
                        r=this._getBubbleR(group[j].getCount(), true);
                        globalR = globalBorder+5;
                        globalBorder+=5+r;
                    }

                    x=Math.cos(degree)*globalR; 
        			y=Math.sin(degree)*globalR; 

                    positioned = true;
                    curPos = {
                        x:x, 
        			    y:y, 
        			    r: this._getBubbleR(group[j].getCount())
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
        this.inc = this.CHART_WIDTH/(orbit[orbit.length-1]*2);

        var circles = this._bubbles;
        var offset = this._getOffset();
//        ctx.strokeStyle="rgba(31,55,79,1)";
        ctx.strokeStyle="rgba(199,199,199,1)";
        ctx.clearShadow();
        for(var i=0;i<circles.length;i++){
            var pos = circles[i].pos;
            var data = circles[i].data;
            pos.x = x+(pos.x+offset[0])*this.inc;
            pos.y = y+(pos.y+offset[1])*this.inc;
            pos.r = pos.r*this.inc;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(pos.x, pos.y);
            ctx.closePath();
            ctx.stroke();
        }

        for(var i=0;i<circles.length;i++){
            var pos = circles[i].pos;
            var data = circles[i].data;
            var color = this._getColor3D(circles[i].group);
//            var color = [255, 255, 255];
            var bubbleX = pos.x;
            var bubbleY = pos.y;
            var radius = pos.r;
            radius = radius>4?radius:4;
//            ctx.clearShadow();
            ctx.shadowColor='white';
            ctx.shadowBlur=3;
            if(radius<=4){
                ctx.fillStyle=color;//"rgba("+color[0]+", "+color[1]+", "+color[2]+", 0.5)";
            }else{
                var grd = ctx.createRadialGradient(bubbleX-radius/Math.sqrt(2),bubbleY+radius/Math.sqrt(2),2*radius-5,bubbleX+radius/Math.sqrt(2),bubbleY-radius/Math.sqrt(2),5);
                grd.addColorStop(0,"white");
                grd.addColorStop(1, color);
                ctx.fillStyle=grd;
            }
            ctx.strokeStyle="rgba("+color[0]+", "+color[1]+", "+color[2]+", 0.5)";
            ctx.beginPath();  
            ctx.arc(bubbleX,bubbleY,radius,0,Math.PI*2 ,false); // Outer circle  
            ctx.closePath();  
            ctx.fill();
//            ctx.stroke();
            ctx.fillStyle="#fff";
            ctx.font="bold 15pt Calibri";
            ctx.shadowColor="black";
            ctx.shadowBlur = 10;
//            ctx.fillText(data.getCount()+"-"+Math.ceil(bubbleX)+"-"+Math.ceil(bubbleY),bubbleX,bubbleY);
            ctx.fillText(data.getCount(),bubbleX,bubbleY);
            ctx.fillStyle="#000000";
            ctx.font="normal 11pt Calibri";
            ctx.shadowColor="white";
            ctx.shadowBlur = 6;
            ctx.fillText(data.get('roleName'),bubbleX, bubbleY+12);
        }
    },
/**    _drawGraph1 : function(){
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
            var bubbleX = (pos.x+x+offset[0]);
            var bubbleY = (pos.y+y+offset[1]);
            var color = this._getColor3D(circles[i].group);
//            var color = [255, 255, 255];
            var radius = pos.r;
//            ctx.clearShadow();
            ctx.shadowBlur=1;
            if(radius<=2){
                ctx.fillStyle= color;//"rgba("+color[0]+", "+color[1]+", "+color[2]+", )";
            }else{
                var grd = ctx.createRadialGradient(bubbleX-radius/Math.sqrt(2),bubbleY+radius/Math.sqrt(2),radius%0.95,bubbleX+radius/Math.sqrt(2),bubbleY-radius/Math.sqrt(2),radius*0.05);
                grd.addColorStop(0,"rgba("+color[0]+", "+color[1]+", "+color[2]+", 0.1)");
                grd.addColorStop(1,"#D8794C");
                ctx.fillStyle=grd;
            }
            ctx.strokeStyle="rgba("+color[0]+", "+color[1]+", "+color[2]+", 0.5)";
            ctx.beginPath();  
            ctx.arc(bubbleX,bubbleY,radius,0,Math.PI*2 ,false); // Outer circle  
            ctx.closePath();  
            ctx.stroke();
            ctx.fill();

            ctx.fillStyle="#000000";
            ctx.font="bold 15pt Calibri";
            ctx.clearShadow();
//            ctx.shadowColor="white";
//            ctx.shadowBlur = 10;
            ctx.fillText(data.count,bubbleX,bubbleY);
            ctx.fillStyle="black";
            ctx.font="normal 9pt Calibri";
            ctx.shadowColor="gray";
            ctx.shadowBlur = 6;
            ctx.fillText(data.name,bubbleX, bubbleY+10);
        }
    },**/
    _getColor3D : function(i){
        return "rgba(2,91,138,"+(7-i)/7+")";
//        return "rgba(255,255,255,)";
    },
    _getColor : function(i){
        var colors = [
            [22,67,99],//blue
            [100,230,1],//bright green
            [120,90,60],
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
            [66,250,11],
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

