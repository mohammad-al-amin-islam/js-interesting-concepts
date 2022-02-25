function welcomMessage (name,callbackFunction){
    callbackFunction(name);
}

function greetMorning(name){
    console.log(name,'Good Morning');
}
function greetAfternoon(name){
    console.log(name,'afternoon');
}

welcomMessage('sakib khan',greetMorning);
welcomMessage('sapik khan',greetAfternoon);