/* 
falsy value
1.false
2.0
3.empty string
4.nan
5.null
6.undefined



truthy value
1.true
2.any positive and negative number
3.any string also with a whitespace
4.any array --inculding empty array[]
5.any object--{}
6.anything else that is not falsy is truthy

*/
let x = parseInt('afaf');
if(x){
    console.log(x,'this is truthy');
}
else{
    console.log(x,'this is falsy')
}