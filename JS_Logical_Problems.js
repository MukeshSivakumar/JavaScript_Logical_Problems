// -------------------largest element in array ------------

// let arr = [23,88,10,66,340,5, 789, 5638];
// let arr1=arr[0]
// for (let i=0; i< arr.length; i++) 
// {
//     if (arr[i]>arr1){
//         arr1=arr[i]
//     }
// }
// console.log(arr1+": biggest number")
    


// -------------- odd or even loop -------------
// for (i=0;i<=50;i++)
// {
//     if (i%2==0)
//     {
//         console.log(i+"even")
//     }
//     else{
//         console.log(i+"odd")
//     }
// }

// ---------------- reverse array ----------------

// let arr=[95,28,3,67,5,456]
// let reverseArr=[]
// for(let i=arr.length-1;i>=0;i--)
// {
   
//    reverseArr[arr.length-1-i]=arr[i]
   
// }
// console.log(reverseArr)


// let arr=[95,28,3,67,5,456]
// let reverseArr=[]
// let value = 0;
// for(let i=arr.length-1;i>=0;i--)
// {
   
//    reverseArr[value]=arr[i]
//    value++
   
// }
// console.log(reverseArr)


// reverseArr[0] = arr[5]
// reverseArr[1] = arr[4]
// reverseArr[2] = arr[3]
// reverseArr[3] = arr[2]
// reverseArr[4] = arr[1]
// reverseArr[5] = arr[0]



// ----------------- star pattern ------------



// let n = prompt("enter the value")

// for(i=n;i>=1;i--)
// {
//     value =""
//     for(j=i;j>=1;j--){
//         value += "*"+" "
//     }
//     console.log(value)
// }


// ------------------ vowels ---------------


// let str="engineering";
// let count=0;


// for(i=0;i<=str.length;i++){
//     if(str[i]=='a'||str[i]=='e'||str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
//     count=count+1;
// }
// }

// console.log( count)


// -------------- object to array ---------------------



// let obj = {
//     name : "Mukesh",
//     dob : "29-09-1997",
//     id : 101
// }

// let arr = new Array();

// let objLength = Object.keys(obj).length;

// console.log(Object.keys(obj)[0]);


// for(let i=0;i < objLength ; i++)
// {
//     arr[i] = [];
//     arr[i][0] = Object.keys(obj)[i];
//     arr[i][1] = obj[Object.keys(obj)[i]];
// }

// console.log(arr);


