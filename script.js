const display = document.getElementById("display"); // linking display to a const display

const maxlength = 10;   // now also adding a digit limit in display 

function appendToDisplay(input)   // taking input from our buttons 
{
      
    let currenttext = display.value;
    
    if(currenttext.length < maxlength)
    {
        display.value  += input;
    }
}

function cleardisplay()
{
    display.value = "";
}

function calculate()
{
    try
    {
        display.value = eval(display.value);  // {the main thing} ( eval() function is like a built in calculator which calculates the data)
    }

    catch(error)                 // using try-catch system for any errors during calculation
    {
        display.value = "Error";
        setTimeout(cleardisplay, 1500);   //IMP again cleared my display
    }
} 