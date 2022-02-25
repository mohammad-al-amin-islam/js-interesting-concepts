const a = 1;
const b = true;
//here == convert true value to 1 and string value to number that why its return true;because its check only value not type;
/* if(a == b){
    console.log('condition is true');
}
else{
    console('condition is false');
}
 */

/// here === check value and also type .thats why its false;
/* if(a === b){
    console.log('condition is true');
}
else{
    console.log('condition is false');
} */

//it return false because no premptive data save its reffernce... for its we need loop instances
/* const ob = {name:'alamin',mobile:0123}
const ob2 = {name:'alamin',mobile:0123} */
const a =[];
const a2 =[];
if(a === a2){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

