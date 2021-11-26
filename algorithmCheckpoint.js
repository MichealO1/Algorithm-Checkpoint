
/*Question 

At this checkpoint, you are asked to write an algorithm that read a sentence, 
which ends with a point, character by character and to determine:

The length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.

You have to keep in mind that: 

Each character will be treated separately.
The last character is the point.
Use three variables as counters. */

const sentence = "Micheal passion for programming would make him complete GOMYCODE learning platform."

function checkpoint(sentence, sentenceLength = 0, numberofWordsCount = 0, vowelsCount ){
    
    const vowels = ['a', 'e', 'i', 'o', 'u']

    sentenceLength = sentence.length;

    numberofWordsCount = sentence.split(" ").length;

    
        for (let char of sentence) {
            if (vowels.includes(char)) {
                vowelsCount++
            }
        } 

    return [sentenceLength,numberofWordsCount,vowelsCount]
}

