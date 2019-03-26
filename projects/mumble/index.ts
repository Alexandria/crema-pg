// Define
type Mumble = (stringVal: string) => string





// Implement
// var name : Type name = (each, paramter, in, typedeinition) => {function definition}
export const mumble: Mumble = (stringVal) => {
    let count: number = 0
    let accumString: string = ""
    let stingArray: string[] = stringVal.split("")

    // grabbing each letter in a string
    for (let index in stingArray) {
        // Making the first letter uppercase and the rest lowercase
        for (let i = 0; i <= count; i++) {
            accumString += (i === 0) ? stingArray[index].toUpperCase() : stingArray[index].toLowerCase()
        }

        if (count != stingArray.length - 1) {
            accumString += "-"
        }

        count += 1
    }

    return accumString
}





