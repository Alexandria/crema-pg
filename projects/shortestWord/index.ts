// Define
type Shortestword = (sentence: string) => number

// Implement
export const shortestWord: Shortestword = (sentence) => {

    let sentenceArray = sentence.split(" ");
    let smallestWord = sentenceArray[0]
    let smallestWordInt

    for (let index in sentenceArray) {
        if (sentenceArray[index].length < smallestWord.length) {
            smallestWord = sentenceArray[index]
        }
    }

    smallestWordInt = smallestWord.length
    return smallestWordInt

}
