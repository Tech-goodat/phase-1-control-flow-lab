
function scuberGreetingForFeet(distance=199){
    if (distance<=400){
return("This one is on me!");
    }
    else if(distance>2500){
        return("No can do.");
    }
    else if(distance>2000){
        return("I will gladly take your thirty bucks.");
    }
}

function ternaryCheckCity(city="NYC"){
    if (city ==="NYC"){
        return("Ok, sounds good.");
    }
    else{
        return("No go.")
;    }
}
function switchOnCharmFromTip(tip="generous"){
    switch(tip){
        case "generous":
            return("Thank you so much.");
            break;
            case"not as generous":
            return("Thank you.");
            break;
            default:
                return("Bye.");
                break;

    }
}