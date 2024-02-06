var isPalindrome = function (x) {

    let xString = x.toString()
    let xArray = xString.split('')
    let y = xArray.reverse()
    let yString = y.join('')
    if (xString == yString) {
        return true
    }
    else {
        return false
    }
};