"use strict";


// ----------------- store in new array ------------------


// let arr = [23,7,189,88,1902,1];

// // console.log(arr[6])
// let newArr = [];

// // newArr = arr;

// // let count = 0;
// for(let i=arr.length-1 ; i >=0 ; i--)
// {
//    newArr[arr.length-1-i] = arr[i];
  
//    // newArr[0] = arr[0]
//    // newArr[1] = arr[1]
//    //...
//    //..
//    // newArr[5] = arr[5]
// }

// console.log(newArr);


// ----------------- pattern -----------------

// *****
// ****
// ***
// **
// *

// let n=5;
// let p="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       p+=""+j;
//     }
//     p+="\n"
//     console.log(p);
// }
// console.log(p);


// ----------------- ascending order -----------------

// let arr=[23,13,45,67,89,2,29,8]

// for(var i=1;i<arr.length;i++)
// {
//     for(var j=0;j<i;j++)
//     {
//         if(arr[i]<arr[j])
//         {
//             let x=arr[i];
//             arr[i]=arr[j];
//             arr[j]=x
//         }
//         console.log(arr)
//     }
// }


// --------------  pattern 2 -------------------

// 5 4 3 2 1 
// 4 3 2 1 
// 3 2 1 
// 2 1 
// 1


// let n=5;

// for(var i=n;i>=1;i--)
// {
//     var x='';
//     for(var j=i;j>=1;j--)
//     {
       
//         x+=j+" "
//     }
//     console.log(x)
// }



// --------convert  number to array problem ------------- 


// let num = 372920;

// let arr = [];

// let remainder ;
// let i = 0;
// for(;num>=1;)
// {
    
//    remainder = num % 10;
//    console.log("number : "+num);
//    console.log("remainder : "+remainder);
//    arr[i] = remainder;
//    i++;
//    num = Math.floor(num / 10) ;
// }

// console.log(arr.reverse());



// ------------------- count length of a number ------------


// let num = 372920;

// let count = 0;
// let i = 0;
// while(num != 0 )
// {
//     num = Math.floor(num /10);
//     console.log(num);
//     count = count+1;
  
// }

// console.log(count);



// ----------- reverse string -------------



// let str = "Orange";

// console.log(`Original String is ${str}`);

// let str2 = "";

// for(let i=0; i < str.length ; i++)
// {
//     // console.log(str[i]);
//     // let temp = str[i];
//     // str[i] = str[str.length - 1 - i];
//     // str[str.length - 1 - i] = temp;
//     console.log("start");
//     str2[i] = str[str.length - 1 - i];
//     console.log("End");
// }

// console.log(`Reversed String is ${str2}`);


















// ------------------------- doubts ------------------------------


let arr = [23,66,1,90,17];

console.log(arr.length);
for(let i=0; i<=arr.length-1 ; i++)
{ 
  for(let j=i+1; j<=arr.length-1; j++)
  {
    if(arr[i] > arr[j])
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    console.log(arr);
  }
  
}

// console.log(arr);

// n=4
// *****
// *****
// *****
// *****