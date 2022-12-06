/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var str = String(x);  
    var c = 0;
  
    if (x >= 0 && x <= 9){
        return true;
    }else{
        while(c <= str.length / 2){
            if(str.charAt(c) !== str.charAt(str.length - (c+1))){
                return false;
            }
            c++;
        }
      }
      return true;
  };

  console.log(isPalindrome(121));