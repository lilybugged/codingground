function plugInt()
{
       for(i=0;i<5;i++){
        x = parseInt(prompt("give an x value"),10)
        eq = (Math.pow(x,2)-5*x+6)/(x-1)
        console.log(eq)
    }

}

plugInt();
