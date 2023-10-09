

// ------------------------ String or not -------------------


// let inputVal = prompt("Enter an input ; ")

// console.log("Input "+(inputVal.trim().length == 0))

// let trimInput = inputVal.trim();

// if(trimInput.length == 0)
// {
//     alert("INVALID Input - Input should not be empty")
// }
// else
// {
//     let parsedInput = parseInt(trimInput);

//     console.log("trim string : "+trimInput)
//     console.log("parsed num + string : "+parsedInput)
    
//     if(parsedInput && parsedInput == trimInput)
//     {
//        alert(trimInput+" is not a string")
//     }
//     else
//     {
//         alert(trimInput+" is a string")
//     }
// }
// 






// --------------------- blank or string ---------------------

// let userInput = prompt("Enter a number or string : ");

// if(userInput.trim().length == 0)
// {
//     alert("Input should not be blank or empty")
// }
// else{
//     alert("Input is valid")
// }





// -------------------- string to array ---------------


// let str = prompt("Enter a string : ");


// if(str.trim().length == 0)
// {
//    alert("Invalid Input")
// }
// else{

//     let strArr = str.split(" ");

//     alert(strArr);

// }





// ------------------ slice -------------

// let str = prompt("enter a string");
// let count = parseInt(prompt("Enter the count of characters : "));



// if(str.trim().length == 0 || !count)
// {
//     console.log("Incoming if")
//    alert("Invalid Input")
// }
// else{
//    console.log("Incoming else")
//    alert(str.slice(0,count));

// }



// ---------------- mail --------------------







// ----------------Upper And lower case ----------


let str = prompt("Enter a string");

let str2 = "";

console.log("Before : "+str)

for(i=0 ; i<str.length ; i++)
{ 
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
    {
        console.log("Incoming if")
        str2 = str2.concat(str[i].toLowerCase());
    }
    else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
    {
        str2 = str2.concat(str[i].toUpperCase());  
    }
    else{
        str2 = str2.concat(str[i]);
    }
}

console.log("After : "+str2)

alert("Converted String is : "+str2);

