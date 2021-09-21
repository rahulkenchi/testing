a=[] //input array elements here before executing program.
let i=1
if(a.length===0)
{ }

if( a.length===1 ){
        console.log("t")
    }

else if( a.length > 1 ){
    let size=a.length-1
    
    console.log(a[0]>a[1]?"t":"f")
    
    for(i=1 ; i<size ; i++){
        console.log(a[i]>a[i-1] && a[i]>a[i+1]?"t":"f")
        }
    
        console.log(a[size]>a[size-1]?"t":"f")
    }