var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || !strs.every(str => typeof str === 'string')) return "";

    var strsSorted = strs.sort((a, b) => a.length - b.length);
    var prefix = strsSorted[0];

    if (strsSorted.every(str => str.startsWith(prefix))) {
        return prefix;
    }

    for (let i = 1; i < prefix.length; i++) {
        var newPrefix = prefix.slice(0, -i);
        if (strsSorted.every(str => str.startsWith(newPrefix))) {
            return newPrefix;
        }
    }

    return "";
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix([["dog", "racecar", "car"]]))
console.log(longestCommonPrefix(['cir', 'car']))
console.log(longestCommonPrefix(["c", "acc", "ccc"])); 