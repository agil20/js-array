//1
let arr=[1,25,7];
let Sort = arr.sort((a, b) => b-a);
//2
//["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.Hemin function geriye yeni bir array qaytarir. Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

let months=["Yanvar","Fevral","Mart","Aprel"]

function myFunction(value, index) {
    return value  + " " + (index + 1);
    
}
let sortedmonth=months.map(myFunction)
console.log(sortedmonth);
//3
//4)String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
//Meselen: Functiona gelen string - "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.

function WordCount(str) { 
let arrn= str.split(" ") ;
console.log(arrn);
let arr1=[]
for (let index = 0; index < arrn.length; index++)
 {

   let element = arrn[index];

  arr1.push(element.length)


   
} return arr1



  }
console.log( WordCount("Aqil Salam necesem"))
