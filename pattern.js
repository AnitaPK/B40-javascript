// n = 5;
// for (i = 0; i < n; i++) {
//   str = "";
//   for (j = 0; j <= i; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// n = 6;
// for (i = 0; i < n; i++) {
//   var str = "";
//   for (j = 0; j < n-1; j++) {
//     str += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     str += "* ";
//     console.log(str)
// }
// console.log(str);
// }
n = 6;
for (let i = 0; i < n; i++) {
    console.log("start row i will change", str, 'i' )
    var str = '';
    for (let j =0; j < n - i; j++){
        console.log("j will change here", str, 'j')
         str += ' ';
    }
    for (let k = 0; k <= i; k++){ 
        console.log("k will change here", str, 'k')
        str += '* ';
        console.log("after k changed str will", str, 'k')

    }
    console.log(str);  
} 

`
         * 
        * * 
       * * * 
      * * * * 
     * * * * * 
      * * * * 
       * * *
        * * 
         * 

      1
     222
    33333
   4444444 

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1


* * * * *
*       *
*       *
*       *
* * * * *

*******
 ***** 
  ***  
   *   
  ***  
 ***** 
*******

   *       *    
  * *     * *   
 *   *   *   *  
*     * *     * 
       *       



`