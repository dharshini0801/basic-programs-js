function isPalindrome(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("java")); 
console.log(isPalindrome("level")); 
