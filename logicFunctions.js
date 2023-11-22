//  FIZZBUZZ 
function fizzBuzz() {

    for(var i=1;i<=100;i++)
    {
   
        // execution time 234ms
        if(i%3 == 0 || i%5 == 0)
        {
            if(i%3 == 0 && i%5 == 0)
            {
                console.log("FizzBuzz");
            }else if(i%3 == 0)
            {
                console.log("Fizz");
            }else
            {
                console.log("Buzz");
            }
        }
        else
        {
          console.log(i);
        }
    
          // execution time 469ms
          /* if(i%3 == 0 && i%5 == 0)
            {
                console.log("FizzBuzz");
            }else if(i%3 == 0)
            {
                console.log("Fizz");
            }else if(i%5 == 0)
            {
                console.log("Buzz");
            }else {
               console.log(i);
            } */
   
    }
   }

// SWAP without third variable
function swap(a,b) {

    console.log("Before swap a : "+a+" b : "+b)
    a=a+b;
    b=a-b;
    a=a-b;

    console.log("after swap a : "+a+" b : "+b);

}

// Selection Sort

function selectionSort() {

    var arr=[2,8,1,0,45,23,890,5,1];
    var i,j;
    var n=arr.length;
   
    for(i=0;i<n-1;i++)
    {
        for(j=i+1;j<=n-1;j++)
        {
           if(arr[j] < arr[i])
           {
             var temp = arr[i];
             arr[i] = arr[j];
             arr[j] = temp;
           }
        }
        console.log(arr);
    }
    console.log("Selection Sorted Array is : "+arr);
    
}

// BUBBLE SORT

function bubbleSort()
{
    const arr = [10,67,567,22,1,87,1908,367];
    var i,j,temp;

    var n=arr.length;
    for(i=n-1;n>=0;n--)
    {
        for(j=0;j<n-1;j++)
        {
            if(arr[j] > arr[j+1])
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log(arr);
    }
    console.log("BUBBLE Sorted Array : "+arr);
}

// pattern 1
//   * 
//  ***
// *****
//******* 

function pattern1(rows) 
{  
  var n = rows;
  var str = "";
   for(let i=n-1;i>=0;i--)
   {
    for(let j=0;j<n*2-1;j++)
    {
        if(j>=i && j<(n*2-1)-i)
        {
            str+="*";
        }
        else
        {
            str+=" ";
        }
    }
    str+="\n";
   }
  console.log(str);
}

// Sub string

function subString() {

   let str = prompt("Enter the string : ");
   let index1 = prompt("Enter the first index : ");
   let index2 = prompt("Enter the second index : ");
   let strArr = [];

   console.log("String given by user : "+str)
   if(str != null)
   {
    let strlen = str.length;
    if(!isNaN(index1) && !isNaN(index2) && index1 >=0 && index1 < strlen-1 && index2 > 0 && index2 <= strlen-1) 
    {
        let j = 0;
        for(i=0;i<=strlen;i++)
        {
            if(i >= index1 && i <= index2)
            {
                strArr[j]= str.charAt(i);
                j++;
                if(i==index2)
                {
                    break;
                }
            }
        }
        let subStr = strArr.join("");
        console.log("Sub String : "+subStr);
    }
   }
}

// Merge Array

function mergeArray()  {
    let input1 = prompt("Enter Array1 elements with commas : ");
    let arr1 = input1.split(",");
    let input2 = prompt("Enter Array2 elements with commas : ");
    let arr2 = input2.split(",");

    // console.log("Array Every method : "+arr1.every(checkNumber));

    let m = arr1.length;
    let n = arr2.length;

    let valid = arr1.every(checkNumber) && arr2.every(checkNumber);

    if(valid)
    {

        // Merged Array with duplicates

        for(i=0;i<n;i++)
        {
            arr1[m+i] = arr2[i];
        }
        console.log("Merged array with duplicates : "+arr1);

       // Merge array without duplicates

        for(i=0;i<(arr1.length-2);i++)
        {
        for(j=i+1;j<=arr1.length-1;j++)
        {
            if(arr1[i] === arr1[j])
            {
                arr1.splice(j,1);
            }
        }
       }
       console.log("Without Duplicates : "+arr1);
    }
    else{
        alert("INVALID INPUT ------ Don't enter characters, Enter only Numbers");
    }
    
}

function checkNumber(arrElement) {

    return !isNaN(arrElement);
}

function sortString()
{
    let str = prompt("Enter the string you want to sort : ");
    let strlen = str.length;

    let strArr = str.split("");
    let valid = strArr.every(checkAlphabets);
    console.log("Entered String  :  "+str);

    if(valid)
    {
        let temp ; 
        for(i=0;i<strlen-1;i++)
        {
          for(j=i+1 ; j<=strlen-1 ; j++)
          {
            if(strArr[i]>strArr[j])
            {
                temp = strArr[j];
                strArr[j] = strArr[i];
                strArr[i] = temp;
            }
          }
        }
        console.log("Sorted String : "+strArr.join(""));
    }
    else 
    {
        alert("INVALID INPUT ------- Enter only alphabets");
    }
   
}

function checkAlphabets(strChar){
    let charASCII = strChar.charCodeAt();
    if( (charASCII >= 65 && charASCII <= 90 ) || (charASCII >= 97 && charASCII <= 122))
    {
       return true;
    }
    else{
        return false;
    }

}

function multiTable(){
    let table = prompt("Please Enter the Table : ","Only numbers...");
    let n = prompt("Enter the maximum count : ");

    let valid = !isNaN(table) && !isNaN(n);

    if(valid) {
        for(i=1;i<=n;i++)
        {
            console.log(i+" * "+table+" = "+(i*table));
        }
    }
    else{
        alert("INVALID INPUT ------- enter number to perform the operation");
    }
}

function currentDateTime(){
    let currentDate = new Date();

    console.log("Date : "+currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear()
    +"\nTime : "+currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds());
}

function numberOfDates()
{
    let startDate = prompt("Enter the starting date : ");
    let endDate = prompt("Enter the ending date : ");

    console.log("DATES : "+startDate+" "+endDate);

    let valid = (startDate == "" || startDate == " " || endDate == "" || endDate == " ") ? false : true ;

    if(valid)
    {
        let d1Array = startDate.split("/");
        let d2Array = endDate.split("/");

        
        let date1 = parseInt(d1Array[0]);
        let month1 = parseInt(d1Array[1]);
        let year1 = parseInt(d1Array[2]);

        let date2 = parseInt(d2Array[0]);
        let month2 = parseInt(d2Array[1]);
        let year2 = parseInt(d2Array[2]);

        // check whether start date end date changed
        if((year1 > year2) || (year1 == year2 && month1 > month2) || (year1 == year2 && month1 == month2 && date1 > date2))
        {
           let temp ; 

           temp =year1;
           year1=year2;
           year2=temp;

           temp=month1;
           month1=month2;
           month2=temp;

           temp=date1;
           date1=date2;
           date2=temp;

        }

        let leapYear1 = (year1%4 == 0) ? true : false;
        let leapYear2 = (year2%4 == 0) ? true : false;

       

        console.log("Years : "+year1+" "+year2);

        let days = 0;
        
        // calculating days in between years
        for(i= (year1+1); i < year2 ; i++) 
        {
            console.log("print i : "+i)
            if(i%4 == 0) {
                days+= 366;
                console.log("year-leap : "+days);
            }
            else {
                days+= 365;
                console.log("year : "+days);
            }
        }
        console.log("No of Days between years : "+days);
        // calculating days in the remaining months of 
        // the starting year
        if(year1 != year2)
        {
            for(i = (month1+1) ; i <= 12 ; i++)
            {
                if(i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12)
                {
                    days = days + 31;
                }
                else if(i==2)
                {
                    if(leapYear1)
                    {
                        days = days+29;
                    }
                    else 
                    {
                        days = days+28;
                    }
                }
                else 
                {
                    days = days + 30;
                }
            }

        // calculating the days in all 
        // the months of ending year

            for(j=1;j<month2;j++)
            {
                if(j==1 || j==3 || j==5 || j==7 || j==8 || j==10 || j==12)
                {
                    days = days + 31;
                }
                else if(j==2)
                {
                    if(leapYear2)
                    {
                        days = days + 29;
                    }
                    else {
                        days = days + 28;
                    }
                }
                else
                {
                days = days + 30;
                }
            }
        }

        console.log("No of Days except current months : "+days);

        //calculating the actual days in the starting month and ending month

        if(year1==year2 && month1==month2)
        {
            days = date2 - date1;
        }
        else
        {
                if(month1 == 1 || month1 == 3 || month1 == 5 || month1 == 7 || month1 == 8 || month1 == 10 || month1 == 12)
            {
                days = days+31-date1+date2;
            }
            else if(month1 == 2)
            {
                if(leapYear1)
                {
                    days = days + 29 - date1 + date2;
                }
                else 
                {
                    days = days + 28 - date1 + date2;
                }
            }
            else{
                days = days + 30 - date1 + date2;
            }

        }
        

        console.log("Final No of Days : "+days);
   }
   else
   {
     alert("INVALID DATES -- Dates Should not be empty");
   }
}

function str_Frequency()
{
    let str = prompt("Enter the String : ");

    let valid = ((str == "") || (str == " ")) ? false : true;

    if(valid)
    {
    let frequencyObj = new Object();
    let strlen = str.length;
    console.log("str : "+str);
    let strArr = str.split("");
    console.log("Array : "+strArr+" "+strArr.length);

    let highestFreq = 1;

    for(i=0;i<strlen;i++)
    {
        let eachCount = 1;

        for(j=i+1;j<strlen;j++)
        {
            if(strArr[i] == strArr[j])
            {
                eachCount += 1;
                frequencyObj[strArr[i]] = eachCount;
                strArr.splice(j,1);
                strlen--;
                j--;
            }
            if(eachCount > highestFreq)
            {
                highestFreq = eachCount ;
            }
        }
        if(eachCount == 1)
        {
            frequencyObj[strArr[i]] = eachCount;
        }
    }

    console.log("str Array : "+strArr+" "+strArr.length);
    let highFreqArr = new Array();
    for(i=0;i<strArr.length;i++)
    {
        console.log(" "+strArr[i]+" "+frequencyObj[strArr[i]]);
   
        if(frequencyObj[strArr[i]] == highestFreq)
        {
            highFreqArr.push(strArr[i]);
        }
        
    }

    console.log("High Frequency characters are : "+highFreqArr);

    }
    else{
        alert("INVALID - string shoule not be empty");
    }
}

function stringEncoding()
{
    let str = prompt("Enter the string : ");

    let pattern = /[^A-Za-z]/;

    let invalidCheck = str.match(pattern);

    console.log("Input String : "+str);

    if(!invalidCheck)
    {
        let strlen = str.length;

        let newArr = new Array();

        for(i=0;i<strlen;i++)
        {
            let char = str.charCodeAt(i);
            let encodeValue ; 

            if(char >= 65 && char <=90)
            {
                encodeValue = char+3;

                if(encodeValue > 90)
                {
                    encodeValue = 64 + encodeValue - 90;
                }

                newArr[i] = String.fromCharCode(encodeValue);
            }
            else if(char >= 97 && char <= 122)
            {
                encodeValue = char + 3;

                if(encodeValue > 122)
                {
                    encodeValue = 96 + encodeValue - 122;
                }

                newArr[i] = String.fromCharCode(encodeValue);
            }
        }

        let encodedString = newArr.join("");
        console.log("Encoded String is : "+encodedString);

    }
    else
    {
        alert("INVALID INPUT - enter only alphabets; special characters and numbers are invalid")
    }

}

function celebrityProblem()
{
    let persons = parseInt(prompt("How many persons are there in the party ? "));
    
    let arr = Array(20).fill(Array(20));

    let valid = true;

    let matrix = "";

    if(persons)
    {
    loop1:
    for(i=1;i<=persons;i++)
    {
        arr[i] = [];
        loop2:
        for(j=1;j<=persons;j++)
        {
            if(i == j)
            {
                arr[i][j] = 0;
                matrix += arr[i][j];
            }
            else{

                var known = confirm("Does "+i+" knows "+j+" ? If Yes press OK, if no press CANCEL .");
                // console.log("known : "+known);
                if(known)
                {
                    arr[i][j] = 1;
                    matrix += arr[i][j];
                    loop3:
                    for(k=1;k<i;k++)
                    {
                        if(arr[k][j] == 1)
                        {
                          continue;
                        }
                        else{
                            // checking whether all inputs of 
                            // the matched row are 0 or not
                            loop4:
                            for(s=1;s<=persons;s++)
                            {
                              if(arr[k][s] == 0)
                              {
                                continue;
                              }
                              else {
                                valid = false;
                                break loop1;
                              }
                            }
                        }
                    }
                    // checking within the row whether more than
                    // one "1" exists in a row 
                    for(x=1;x<j;x++)
                    {
                        if(arr[i][x] === 0)
                        {
                            continue;
                        }
                        else{
                            valid = false;
                            break loop1;
                        }
                    }
                }
                else{
                    arr[i][j] = 0;
                    matrix += arr[i][j];
                }
            }
            
            
        }
        matrix += "\n";
    }
    console.log(matrix);

    if(valid)
    {
        console.log("Celebrity Exists");
    }
    else
    {
        console.log("Celebrity Doesn't exist");
    }
    }
    else {
        alert("INVALID INPUT : only number are valid; letters,special characters and space not valid");
    }
    
}

function stringFrequency()
{
    let str = prompt("Enter the String : ");

    let valid = (str == "" || str == " " || str.trim().length == 0) ? false : true;

    console.log(valid);
    // console.log("str length : "+str.length);
    // console.log("str length after trim : "+str.trim().length);
    if(valid)
    {
        let frequencyObj = new Object();
        let strArr = str.split("");
        let strlen = str.length;

        // console.log("str length : "+strLen);

        let highestFrequency = 1;

        for(i=0;i < strlen;i++)
        {
            let eachCount = 1;
            
            for(j=i+1;j < strlen; j++)
            {
                if(strArr[i] == strArr[j])
                {
                    eachCount += 1;
                    frequencyObj[strArr[i]] = eachCount;
                    strArr.splice(j,1);
                    strlen--;
                    j--;
                }
                if(eachCount > highestFrequency)
                {
                    highestFrequency = eachCount;
                }
            }
            if(eachCount == 1)
            {
                frequencyObj[strArr[i]] = eachCount;
            }
        }

        let high_Freq_Array = new Array();

        console.log("str arr length : "+strArr.length);
        for(i=0; i < strArr.length ; i++)
        {
            console.log(strArr[i]+" : "+frequencyObj[strArr[i]]);

            if(frequencyObj[strArr[i]] == highestFrequency)
            {
                high_Freq_Array.push(strArr[i]);
            }
        }

        console.log(`Highest frequency characters : ${high_Freq_Array}`);
        
    }
    else {
        alert(`INVALID --- please enter a valid string`);
    }
}


function palindrome()
{
    let str = prompt("Enter a string or number : ");
    let strlen = str.length;

    let valid = (str == "" || str == " " || str.trim().length == 0) ? false : true;

    
    // console.log("string trim length : "+str.trim().length);
    // console.log(`valid ${valid}`);

    if(valid)
    {
        let palindrome = true;
        for(i=0;i<strlen/2;i++)
        {
          if(str[i] != str[strlen - 1 - i])
          {
            palindrome = false;
            break;
          }
        }
        if(palindrome)
        {
            alert(`${str} is a palindrome`);
        }
        else {
            alert(`${str} is not a palindrome`);
        }
    }
    else 
    {
        alert("INVALID Input - please enter a valid input");
    }
   
}

function fibonacci()
{

    let count = parseInt(prompt("Enter the number of for a fibonacci series : "));
    let a = 0;
    let b = 1;
    let c = a+b;
    console.log(a);
    for(i=0;i<count;i++)
    {
        console.log(c);
        c = a+b;
        a = b;
        b = c;
    }

}

function sortOneLoop()
{
    
    // let arr = [110,23,14,55,4,18,1,3,5,98,108];

    let inputValue = prompt("Enter number array : ");

    let inputArr = inputValue.split(",");

    let arr = new Array(inputArr);

    console.log(arr);
    let len = arr.length;

    let temp;

    for(let i = 0 ; i < (len-1) ; i++)
    {
        if(arr[i] > arr[i+1])
        {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;

            i = -1;
        }
    }

    console.log("Final Array : "+arr);

}

function primeNumber()
{
    let num = parseInt(prompt("Enter a number : "));
    let prime = true;

    let valid = (num == "" || num == " " || isNaN(num)) ? false : true;

    console.log("num : "+num+" "+isNaN(num));

    if(valid)
    {
        for(i=2 ; i <= num/2 ; i++)
        {
            if(num%i == 0)
            {
                prime = false;
                break;
            }
        }
        if(prime)
        {
            alert(`${num} is a prime number`);
        }
        else {
            alert(`${num} is not a prime number`);
        }
    }
    else{
        alert("INVALID INPUT - Please enter a valid number");
    }
}



// valid paranthesis 

function paranthesis()
{
    let inputStr = prompt("Enter the paranthesis : ");
    let strArr = inputStr.split("");

    let openBracketArr = ["(","[","{"];
    let closeBracketArr = [")","]","}"];

    let openBracketCount=0;
 
    let flag = true;
    for(let i=0; i<strArr.length ; i++)
    {
        if(closeBracketArr.includes(strArr[i]))
        {
            
            let closeIndex = closeBracketArr.indexOf(strArr[i]);
            let openBracket = openBracketArr[closeIndex];

            console.log("array previous : "+strArr[strArr.length-1-i]);
            console.log("openBracket : "+openBracket);

            if((strArr[strArr.length-1-i] != openBracket) && (strArr[i-1] != openBracket))
            {
                flag = false;
                break;
            }

            openBracketCount--;

        }else{
            console.log("else part : "+strArr[i]);
            openBracketCount++;
        }
    }

    console.log("open bracket count : "+openBracketCount);
    console.log("flag : "+flag);
    if(flag == true && openBracketCount == 0 )
    {
        alert("Paranthesis Matches")
    }
    else{
        alert(false);
    }

}