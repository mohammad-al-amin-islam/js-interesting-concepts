/* 
1.if we declare a variable and dont set any value that will give none;
2.function that don do return
3.return with no value
4.if no parameter passes
5.if no object property
6.range limit cross array element accessing
7.delete array accessing
8.deirectly = undfined

*/

let one;
//console.log(one);

function sum (a,b){
    const result = a + b;
}
//console.log(sum(1,2));

function three (a,b){
    const result = a + b;
    return;
}
//console.log(three(1,2));


function four (a,b){
    const result = a + b;
    return;
}
//console.log(four(1));

const object = {one:1,two:2}
//console.log(object.three);

const array =[1,2,4];
//console.log(array[4]);

delete array[2];
//console.log(array[2]);

const a = undefined;
//console.log(a);

//null is set by own its mean nothing here
const b =null;
console.log(b);