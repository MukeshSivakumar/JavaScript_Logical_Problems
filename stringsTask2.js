


// ----------------- 6. parameterize string ---------------

// let a = prompt("enter the value")
// a=a.toLowerCase().trim();
// let a1=a.replaceAll(" ","-")
// console.log(a1)



// ------------------- 9. truncate a string --------------


// let a=prompt("Enter a sentence")
// let b=prompt("Enter a number")
// let c=a.split(" ")
// let d=c.slice(0,b)
// console.log(d.join(" "))


// ------------------- 10. search string -----------------


// let a=prompt("enter a sentence")
// let b=prompt("enter a word")
// // let wordindex=a.search(b)
// // console.log(wordindex)
// let c=a.replaceAll(b,"")
// // console.log(c[wordindex-2])
// c = c.replace("  "," ")
// console.log(c)



// --------------------- 11. case insensitive --------------

// let sentence= prompt("Enter a sentence");
// let word=prompt("Enter a word");
// let sentence1= sentence.toLowerCase();
// let word1=word.toLowerCase();
// let valid=sentence1.match(word1);

// if(!(valid)){
//     console.log("its not matched");
// }

// else{
//     console.log("its matched");
// }







// --------------------- 8th Humanizse format of numbers------------------------


// let num = parseInt(prompt("Enter a number : "));

let num = 1891;
let onesPlace = num%10;

let tensPlace = num%100;

// console.log(onesPlace+" "+tensPlace);

if(onesPlace == 1 && tensPlace != 11)
{
    // alert(num+"st");
    console.log(num+"st")
}
else if(onesPlace == 2 && tensPlace != 12)
{
    alert(num+"nd")
}
else if(onesPlace == 3 && tensPlace != 13)
{
    alert(num+"rd")
}
else{
    alert(num+"th")
}
