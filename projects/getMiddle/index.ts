// Define
type Getmiddle = (word: string) => string

// Implement
export const getMiddle: Getmiddle = (word) => {
    let wordLen: number = word.length
    let midpoint: number = 0
    let middleChar = ""
    let wordArray: string[] = word.split("")

    midpoint = (wordLen % 2 === 0) ? (wordLen / 2) - 1 : Math.round((wordLen / 2) - 1)

    middleChar = (wordLen % 2 === 0) ? middleChar = wordArray[midpoint] + wordArray[midpoint + 1] : middleChar = wordArray[midpoint]

    // if (wordLen % 2 === 0) {
    //     //even
    //     // divide by two and take the middle number and middle number +1
    //     // s[slen/2] and s[slen/2+1]
    //     midpoint = (wordLen / 2) - 1
    //     console.log(midpoint)
    //     middleChar = wordArray[midpoint] + wordArray[midpoint + 1]
    // }
    // else {
    //     // odd
    //     //s[Math.round(s.len/2)] Math.round will round to the nearest whole number 

    //     midpoint = Math.round((wordLen / 2) - 1)
    //     middleChar = wordArray[midpoint]

    // }


    return middleChar

}
