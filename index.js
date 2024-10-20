let nam='Aishwarya';
let age=20;
let color='lilac'
console.log(nam);
console.log(age);
console.log(color);
let birth=2004;
const d=new Date()
let cyear=d.getFullYear();
let cage=cyear-birth
console.log(cage)
let a=5,b=4
console.log("Sum is",a+b)
console.log("Difference is",a-b)
console.log("Product is",a*b)
console.log("Quotient is",a/b)
let sur_name='Tatiwar'
console.log(nam+" "+sur_name)

function even_odd(num){
    if(num%2==0){console.log("Even")}
    else{console.log("Odd")}
}
// let num=prompt("Enter a number");
// even_odd(num)
str='Nayan'
function palindrome(str){
    let rev=str.split("").reverse().join();
    if (str.localeCompare(rev)){
        console.log("Palindrome")
    }
    else{
        console.log("Not palindrome")
    }
}
palindrome(str);
let length=3,breadth=4
function area(length,breadth){
    console.log("Area is",(length*breadth))
}
let r=9
function circum(r){
    console.log("Circumference is",(2*3.14*r))
}
area(length,breadth)
circum(r)
let tempc=60
function convert(tempc){
    con=((9*tempc)/5)+32
    console.log("Temperature in farheniet",con)
}
convert(tempc)
let tempf=60
function convertf(tempf){
    conf=((tempf-32)*5)/9
    console.log("Temperature in celsius",conf)
}
convertf(tempf)
