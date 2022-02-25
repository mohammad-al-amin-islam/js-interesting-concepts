function stopWatch(){
    let counter = 0;
    return function(){
        counter ++ ;
        return counter;
    }
}
const count = stopWatch();
const count2 = stopWatch();
console.log(count());
console.log(count());
console.log(count2());