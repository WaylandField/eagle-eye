function kmeans( arrayToProcess,key, Clusters ){
  var Groups = new Array();
  var Centroids = new Array();
  var oldCentroids = new Array();
  var changed = false;

  // order the input array
  arrayToProcess.sort(function(a,b){return getKey(b, key) - getKey(a,key);});  
  
  // initialise group arrays
  for( initGroups=0; initGroups < Clusters; initGroups++ )
  {
      Groups[initGroups] = new Array();
  }  
  
  // pick initial centroids
  
  initialCentroids=Math.round( arrayToProcess.length/(Clusters+1) );  
  
  for( i=0; i<Clusters; i++ )
  {
  
    Centroids[i]=getKey(arrayToProcess[ (initialCentroids*(i+1)) ], key);
  
  }
  
  do
  {
  
    for( j=0; j<Clusters; j++ )
	{
	
	  Groups[j] = [];
	
	}
  
    changed=false;
	
	for( i=0; i<arrayToProcess.length; i++ )
	{

	  Distance=-1;
	  oldDistance=-1;
	
 	  for( j=0; j<Clusters; j++ )
	  {
	  
        distance = Math.abs( Centroids[j]-getKey(arrayToProcess[i],key) );	
		
		if ( oldDistance==-1 )
		{
		
		   oldDistance = distance;
		   newGroup = j;
		
		}
		else if ( distance <= oldDistance )
		{
		  
		    newGroup=j;
			oldDistance = distance;
		  
		}
	  
	  }	
	  
	  Groups[newGroup].push( arrayToProcess[i] );	  
	
	}
  
    oldCentroids=Centroids;
  
    for ( j=0; j<Clusters; j++ )
	{
  
      total=0;
	  newCentroid=0;
	  
	  for( i=0; i<Groups[j].length; i++ )
	  {
	  
	    total+=Groups[j][i][key];
	  
	  } 
	
	  newCentroid=total/Groups[newGroup].length;  
	  
	  Centroids[j]=newCentroid;
	  
	}
  
    for( j=0; j<Clusters; j++ )
	{
	
	  if ( Centroids[j]!=oldCentroids[j] )
	  {
	  
	    changed=true;
	  
	  }
	
	}
  
  }
  while( changed==true );
  
  return Groups;

  function getKey(obj, key){
      if(obj.key){
          if(typeof obj.key === 'function'){
              return obj.key.call(obj);
          }else{
              return obj.key;
          }
      }
      return 0;
  }
  
}

var testData1 =[{count:100},{count:1},{count:2},{count:3},{count:69},{count:40},{count:20},{count:21}];
var clusters = 7;
console.log(kmeans(testData1, 'count' ,clusters));

function calcCircle(){
    var step = 1;
    for(var i=1;i<=7;i++){
        step+=i;
        console.log(Math.PI/Math.asin(1/step));
    }
}

calcCircle();