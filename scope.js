const num = 1;

function add(first, second) {
    //console.log(first,second);
    console.log(num3);//hoitsting happening

    console.log(num);//it will work cause num is gloabal variable
    if (second > 1) {
        const num2 = 10;
        var num3 = 15;
    }
    //console.log(num2); it wont work cause num2 is in block scope
    
    /* mood ='happy';
    mood = 'cranky' */

}
//console.log(mood);

//it cant happen because first is local scope
//console.log(first);
add(1, 2);

for(var i = 0;i<10;i++){

}
console.log(i);