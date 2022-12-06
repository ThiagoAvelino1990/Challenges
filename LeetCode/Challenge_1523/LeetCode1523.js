/**
 * 1523. Count Odd Numbers in an Interval Range
Easy
1.2K
85
Companies
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:

0 <= low <= high <= 10^9

*/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    /*Verifica se os números são ímpares*/
    if(low % 2 == 1 && high % 2 == 1){
        /*Se os números são ímpares e iguais retorna 1*/
        if (low == high){
            return 1;
        }
        else{
            return ((high - low) + 2) /2;
        }
        /*Verifica se os números são pares*/
    }else if (low % 2 == 0 && high % 2 == 0){
        /*Se os números são pares e iguais, retorna 0*/
        if (low == high){
            return 0;
        }
        else{
            return (((high - low) +2)/ 2) - 1;
        }        
    }else{
        return (high - low) /2;
    }
};