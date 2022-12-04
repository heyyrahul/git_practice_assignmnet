//p1.   check whether 7 is prime number or not
   let count=0;
for(let i=1;i<=7;i++){
if(7%i==0){
count++
}
}if(count==2){
console.log(7+"is a prime number")
}else {
console.log(7+"is not a prime number")
}



//P2.   check whether "madam" is a palindrome or not.


let str="madam"
let bag="";
for(let i=0;i<str;i++){
bag+=str[i]
}
if(bag==str){
console.log(" yes it is a palindrome ")
}else{
console.log("no it is not a palindrome")
}