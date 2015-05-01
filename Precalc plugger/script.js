function sayHello()
{
    equ=prompt("give an equation containing x");
    times=parseInt(prompt("how many times would you like to plug an x value?"));
    for (i=0;i<times;i++){
        x=parseInt(prompt("give x"),10);
        window.alert(eval(equ));
    }
   
}

sayHello();
