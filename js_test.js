

// let arr = [23,89,1,901,728,44,234];

// let largest_num = arr[0];

// console.log(arr)

// for(let i=0 ; i < arr.length ; i++)
// {
//     if(arr[i] > largest_num)
//     {
//         largest_num = arr[i];
//     }
// }
// console.log(largest_num)



// let arr = [78,930,88,99,27]

// let arr2 = new Array();

// console.log(arr)
// for(let i=0; i<arr.length ; i++)
// {
//     arr2[i] = arr[arr.length-1-i];
// }

// arr = arr2;

// console.log(arr)


// let num = prompt("Enter a number : ")

// let str = "";
// for(i=num ; i > 0 ; i--)
// {
//     for(j = 1 ; j <= i ; j++)
//     {
//         str+="*";
//     }
//     str+="\n";
// }

// console.log(str)



// -------------------- vowel ---------------------------

// let str = prompt("Enter a string : ");
// let count = 0;
// for(let i=0;i<str.length;i++)
// {
//     if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ||
//     str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U" )
//     {
//         count += 1;
//     }
// }

// console.log("The vowels in the given string '"+str+"' is : "+count)


// ----------- stone - paper - scissor ---------------

// let player1 = prompt("Player 1  : ")
// let player2 = prompt("Player 2  : ")

// let winner = stone_paper_scissor(player1,player2);

// alert("Player 1 - "+player1+"\nPlayer 2 - "+player2+"\n"+winner)

// function stone_paper_scissor(player_1,player_2)
// {
//     if(player_1 == player_2)
//     {
//         return "Its a draw"
//     }
//     else if((player_1 == "paper" && player_2 == "stone") ||
//        (player_1 == "stone" && player_2 == "scissor") ||
//         (player_1 == "paper" && player_2 == "stone")){

//             return "The winner is player1"
//     }
//     else {
//         return "The winner is player2"
//     }
// }