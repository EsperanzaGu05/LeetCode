var romanToInt = function (s) {
    let sArray = s.split("")
    let count = 0
    for (let i = 0; i < s.length; i++) {
        switch (sArray[i]) {
            case "I":
                if (sArray[i + 1] == "V" || sArray[i + 1] == "X") {
                    count = count - 1
                }
                else {
                    count = count + 1
                }
                break;
            case "V":
                count = count + 5
                break;
            case "X":
                if (sArray[i + 1] == "L" || sArray[i + 1] == "C") {
                    count = count - 10
                }
                else {
                    count = count + 10
                }
                break;
            case "L":
                count = count + 50
                break;
            case "C":
                if (sArray[i + 1] == "D" || sArray[i + 1] == "M") {
                    count = count - 100
                }
                else {
                    count = count + 100
                }
                break;
            case "D":
                count = count + 500
                break;
            case "M":
                count = count + 1000
                break;
        }
    } return count
};

let s = "XM"
let integer = romanToInt(s)
console.log(integer)