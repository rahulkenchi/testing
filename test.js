let testexp="9/2+2-3-4/2"
let reg=new RegExp(/[\+\-\*\/\^]/)
let i=0
let sum=0
let tmp=""
let a=[""]
let b=[""]
for(i=0;i<testexp.length;i++)
{    
    if(reg.test(testexp[i]))
    {   
        a.push(tmp)
        tmp=""
        b.push(testexp[i])
    }
    else{
        tmp+=testexp[i]
    }
}
a.push(tmp)
a.shift()
b.shift()
console.log(a,b)
for(i=0;i<a.length;i++)
{
    if(a[i]==="")
    {
        a[i+1]=b[i]+a[i+1]                
    }
}

while(a.includes(""))
{    
    b.splice(a.indexOf(""),1)
    a.splice(a.indexOf(""),1)
    
}

while(b.includes('*')||b.includes('/') || b.includes('^')){
    let index    
    if(b.includes('^')) {    
        index=b.indexOf('^') 
        a.splice(index,2,Number(a[index])**Number(a[index+1]))      
    }
    else if(b.includes('*')) {
        index=b.indexOf('*') 
        a.splice(index,2,Number(a[index])*Number(a[index+1]))    
    }
    else{
        index=b.indexOf('/')
        a.splice(index,2,Number(a[index])/Number(a[index+1]))        
    }
    b.splice(index,1)
}
sum=Number(a[0])
for(i=1;i<a.length;i++)
{
 switch(b[i-1])
 {
     case '+': sum+=Number(a[i])
     break
     
     case '-': sum-=Number(a[i])
     break

     default : console.log("Error selecting operator")
 }
}
console.log(sum)