let display=document.querySelector('.calculator-input');

const keys=document.getElementsByTagName('button');

let clear=document.getElementById("clear");

let equal=document.getElementById("equal-sign");

let operator=document.getElementsByClassName("operator");

let displayValue='0';

updateDisplay();

function updateDisplay(){
    display.value=displayValue;
}

for(var i=0;i<17;i++)
{
    if(i!=15 && i!=16)
    {
        keys[i].addEventListener("click",yazdir);
    }
    
}

function yazdir(){
   if(display.value==0){
    display.value="";
   }
   display.value=display.value+this.value;
}


clear.addEventListener("click",displayClear);

function displayClear()
{
    updateDisplay();
}



equal.addEventListener("click",displayEqaul);

function displayEqaul()
{
    display.value=eval(display.value);

}
