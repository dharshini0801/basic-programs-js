function findLongestWord(sentence) {
    var words = sentence.split(" ");
    var longest = words[0];

    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(findLongestWord("I am learning JavaScript programming")); 