// this function gets called then the button is pressed
function compute()
{


    // I get the value of the amount text field
    var principal = document.getElementById("principal").value;

    // I transform the variable principal into an integer
    var principalInt = parseInt(principal);

    // I validate whether the user inputted a positive number in the Amount text box
    if (principalInt === 0 || principalInt < 0) {

        alert("Enter a positive number as the amount");

        // I set the focus on the Amount input text box
        document.getElementById("principal").focus();

    } else {

        //I get the value for the rate slider
        var rate = document.getElementById("rate").value;

        // I get the value for the years field
        var years = document.getElementById("years").value;

        // I calculate the interest
        var interest = principal * years * rate /100;

        // I calculate the year
        var year = new Date().getFullYear()+parseInt(years);

        // I set the innerHTML value of the result element, highligthing the numbers
        document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>"+principal+"</span>"+","+"\<br\>at an interest rate of "+"<span class='highlight'>"+rate+"</span>"+"<span class='highlight'>"+"%"+"</span>"+"<br\>You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+","+"\<br\>in the year "+"<span class='highlight'>"+year+"</span>"+"\<br\>";
    
    }

}


//this function updates the rate_val value when the slider is changed
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

  
