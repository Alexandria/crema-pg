// Define
type Cypher = (str: string, n: number) => number[]

// Implement
export const Cypher: Cypher = (str, n) => {
    //let cypher: number[] = []
    // is there any other way to loop over a string without converting it into an array?

    let answer: number[] = []

    let strArray: string[] = str.split("")
    let keyArray: string[] = ("" + n).split("")
    // alphabet array 
    let alphabet: string[] =
        ["a", "b", "c", "d", "e",
            "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o",
            "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z "]


    //Use a for loop to grab each letter in a word
    //use .indexOf(str) + 1 to get its correct coordanance 
    // for (let char of strArray) {
    //     let charNum = alphabet.indexOf(char) + 1
    //     cypher.push(charNum)

    // }
    console.log("String Array: ", strArray)

    let cypher = strArray.map(function (num: string) { return alphabet.indexOf(num) + 1 })

    //Array.map() higher order funcitons

    let keys = keyArray.map(function (key: string) { return parseInt(key) })


    // compair add index number to the key
    // add key 1,9,3,9  -- convert into a number
    console.log(cypher)

    for (let i = 0; i < cypher.length; i++) {
        if (i > keys.length - 1) { //5
            // we do things scou t
            let mod = (i) % (keys.length)
            console.log("Mod Var: ", mod)
            answer.push(cypher[i] + keys[mod])

        } else {
            answer.push(cypher[i] + keys[i])
        }

    }

    // for (let a in cypher) {
    //     console.log(index)
    // }


    return answer
}


