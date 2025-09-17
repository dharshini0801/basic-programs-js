function capitalizeWords(sentence) {
    var words = sentence.split(" ");

    for (var i = 0; i < words.length; i++) {
        var firstLetter = words[i][0].toUpperCase();
        var rest = words[i].substring(1);
        words[i] = firstLetter + rest;
    }

    return words.join(" ");
}

console.log(capitalizeWords("i am learning javascript"));