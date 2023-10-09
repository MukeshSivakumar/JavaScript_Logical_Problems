


// --------------------------- odd or even --------------------------------


// let num = parseInt(prompt("Enter the number : "))

// console.log("num : "+num)
// if(num)
// {

//     if(num % 2 == 0)
//     {
//     console.log(num+" is a even number");
//     }
//     else
//     {
//     console.log(num+" is a odd number")
//     }
// }
// else{
//     alert("INVALID Input - Only number are allowed")
// }










// ---------------------------------- Not a number ---------------------------------



// let test=prompt("Enter the number:")
// if(isNaN(test))
// {
//     console.log("Its not a number")
// }
// else{
//     console.log("its a number")
// }



// -----------------------------  Largest among 2 ---------------------------



// let test=prompt("Enter a number 1")
// let test2=prompt("Enter a number 2")
// if(test>test2)
// {
//     console.log(test+" is the largest number")
// }
// else{
//     console.log(test2+" is the largest number")
// }



// ------------------------------- Largest among 3 ---------------------------



// let num1=prompt("enter a number1")
// let num2=prompt("enter a number2")
// let num3=prompt("enter a number3")

// if (num1==num2 && num1==num3){
//     console.log("all equal")}

// else if(num1>num2 && num1>num3)
// {
//   console.log(num1+"is the largest number")
// }

// else if(num2>num3 ){
//     console.log(num2+"is the largest number")
// }

// else{
//     console.log(num3+"is the largest number")
// }


// ------------------------ number between the range or outside the range ------------------------

// let startRange = parseInt(prompt("Enter the starting range"))
// let endRange=parseInt(prompt("Enter the ending range"))
// let num=prompt("Enter the number")

// let valid = (startRange >= 0) && (endRange >= 0);
// console.log("Valid : "+valid);

// if(valid)
// {
//     if(num>=startRange && num<=endRange){
//         console.log("Between the range")
//     }
//     else{
//         console.log("Outside the range")
//     }
// }
// else {
//     console.log("Negative range not allowed")
// }





// ------------------------------------- task extension -------------------------------------------



// let num1 = parseInt(prompt("Enter number 1 : "));
// let num2 = parseInt(prompt("Enter number 2 : "));
// let num3 = parseInt(prompt("Enter number 3 : "));

// let valid = num1 && num2 && num3;

// console.log("Inputs : "+typeof valid)

// if(valid)
// {
//   if(num1 == num2 || num1 == num3 || num2 == num3)
//   {

//     if(num1 == num2 && num1 == num3)
//     {
//         console.log("All the numbers are equal")
//     }
//     else if(num1 == num2){

//         if(num1 > num3)
//         {
//             console.log(num1+" and "+num2+" are equal and it is greater than "+num3)
//         }
//         else{
//             console.log(num3+" is greater than both "+num1+" and "+num2)
//         }

//     }
//     else if(num1 ==  num3)
//     {
//         if(num1 > num2)
//         {
//             console.log(num1+" and "+num3+" are equal and it is greater than "+num2) 
//         }
//         else
//         {
//             console.log(num2+" is greater than both "+num1+" and "+num3)
//         }
//     }
//     else{
//         if(num2 > num1)
//         {
//             console.log(num2+" and  "+num3+" are equal and it is greater than "+num1)     
//         }
//         else{
//             console.log(num1+" is greater than both "+num2+" and "+num3)        
//         }
//     }
//   }
//   else{

//     if(num1 > num2 && num1 > num3)
//     {
//         console.log(num1+" is greater than "+num2+" & "+num3)
//     }
//     else if(num2 > num3)
//     {
//         console.log(num2+" is greater than "+num1+" & "+num3)
//     }
//     else{
//         console.log(num3+" is greater than "+num1+" & "+num2)     
//     }
//   }
// }
// else {
//     console.log("Invalid Input")
// }



// --------------------------------- task extension -----------------------------



// let num1=parseInt(prompt("Enter a number1:"));
// let num2=parseInt(prompt("Enter a number2:"));
// let num3=parseInt(prompt("Enter a number3:"));

// console.log("Inputs : "+num1,num2,num3)

// let valid = num1 && num2 && num3;

// console.log("valid : "+valid)

// if(valid)
// {

//     if(num1 == num2 || num2 == num3 || num1 == num3)
//    {

//     if((num1==num2) && (num1==num3))
//     {
//             alert("All values are equal");
//     }

//     else if(num1==num2){
//         if (num3>num1){

//         alert("num1 & num2 is equal and num3 is largest");
//         }
//         else {
//             alert("num1 and num2 is equal and its larger than num3")
//         }

//     }


//     else if(num2==num3)
//     {
//     if (num1>num2)
//     {
//     alert("num2 and num3 is equal and num1 is largest");
//     }
//     else {
//         alert("num2 and num3 is equal and its is larger tha num1");
//     }
//     }

//     else{
                
//     if (num2>num3)
//     {
//         alert("num1 and num3 is equal and num2 is largest");
//     }
//     else {
//         alert("num2 and num3 is equal and its is larger tha num2");
//     }
//     }

//     }
//     else
//     {

//         if((num1>num2) && (num1>num3))
//     {
//         alert(num1 +" is largest");
//     }

//     else if(num2>num3)
//     {
//         alert(num2 +" is largest");
//     }

//     else 
//     {
//         alert(num3 +" is largest");
//     }

//     }

// }
// else{
//     alert("Invalid Input")
// }





