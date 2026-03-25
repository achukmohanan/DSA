                                        // multiply a array using recursion

// normal way which is => loops
//     let arr = [1,2,3,4,5];
//     function multiply(arr){
//         let product = 1
//         for(let i=0; i<arr.length; i++){
//             product *=arr[i]
//         } 
//         return product 
//     }
// console.log(multiply(arr))

                                        // using recursion------------>
    //    let arr = [1,2,3,4,5,6];

    //    function multiply(arr){
    //     if(arr.length <=0){
    //         return 1
    //     }

    //     return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1)) 
    //    }
    //    console.log(multiply(arr)) 
                    /* working like takes the last element 6 * multiply(arr.slice(0,5))
                                                          5 * multiply(arr.slice(0,4))
                                                          4 * multiply(arr.slice(0,3))
                                                          3 * multiply(arr.slice(0,2))
                                                          2 * multiply(arr.slice(0,1))
                                                         then the base case returns 1 the calls the 1 * 2 * 3 * 4 * 5 */
                                                         
