var a=11 // input number here before executing program.
if (a===0 || a===1)
    console.log("0 and 1 are not Prime Numbers.")
else if(a===2 || a===3 || a===5 || a===7 )
    console.log("Number is a prime number.")
else if ( a%2===0 || a%3===0 || a%5===0 || a%7===0 )
    console.log("Number is not prime.")
else 
    console.log("Number is a prime number.")