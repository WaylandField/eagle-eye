Ext.define('Kitchensink.util.Utils',{
singleton:true,    
kmeans: function( arrayToProcess, key, Clusters ){
  var Groups = new Array();
  var Centroids = new Array();
  var oldCentroids = new Array();
  var changed = false;

  // order the input array
  arrayToProcess.sort(function(a,b){return b[key] - a[key];});  
  
  // initialise group arrays
  for( initGroups=0; initGroups < Clusters; initGroups++ )
  {
      Groups[initGroups] = new Array();
  }  
  
  // pick initial centroids
  
  initialCentroids=Math.round( arrayToProcess.length/(Clusters+1) );  
  
  for( i=0; i<Clusters; i++ )
  {
  
    Centroids[i]=arrayToProcess[ (initialCentroids*(i+1)) ][key];
  
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
	  
        distance = Math.abs( Centroids[j]-arrayToProcess[i][key] );	
		
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
//	  Groups[newGroup].splice(0,0,arrayToProcess[i]);
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
},
//kmeans ends here

simpleGroup : function(arrayToProcess, key,  clusters){
    // sort data array
    arrayToProcess.sort(function(a,b){return a[key] - b[key];});  
    
    // get gap array
    // find the largest gaps
    // make the 
}
});