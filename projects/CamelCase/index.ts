// Define
type Camelcase = (str: string) => string

// Implement
export const CamelCase: Camelcase = (str) => {

    let strArray: string[] = str.split(" ")

    for (let index in strArray) {
        let word = strArray[index]
        word = word.charAt(0).toUpperCase() + word.slice(1)
        strArray[index] = word
    }

    str = strArray.join("")

    return str

}
