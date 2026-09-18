/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    let i = 0;

    while (i < words.length) {

        let j = i;
        let lineLength = 0;

        // Find words that can fit in this line
        while (
            j < words.length &&
            lineLength + words[j].length + (j - i) <= maxWidth
        ) {
            lineLength += words[j].length;
            j++;
        }

        let wordCount = j - i;
        let spaces = maxWidth - lineLength;

        // Last line OR only one word
        if (j === words.length || wordCount === 1) {

            let line = "";

            for (let k = i; k < j; k++) {
                line += words[k];

                if (k < j - 1) {
                    line += " ";
                }
            }

            // Remaining spaces at the end
            line += " ".repeat(maxWidth - line.length);

            result.push(line);

        } else {

            // Normal fully-justified line
            let gaps = wordCount - 1;

            let spaceEach = Math.floor(spaces / gaps);
            let extraSpaces = spaces % gaps;

            let line = "";

            for (let k = i; k < j; k++) {
                line += words[k];

                if (k < j - 1) {
                    // Left gaps get extra spaces
                    let count = spaceEach + (k - i < extraSpaces ? 1 : 0);

                    line += " ".repeat(count);
                }
            }

            result.push(line);
        }

        i = j;
    }

    return result;
};