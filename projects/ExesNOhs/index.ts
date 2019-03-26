// Define
type Exesnohs = (a: string) => boolean

// Implement
export const ExesNOhs: Exesnohs = (a) => {
    let isEqual: boolean = false
    let aString: string[] = a.toLowerCase().split("")
    let xCount: number = 0
    let oCount: number = 0

    for (let index in aString) {
        if (aString[index] === "x") {
            xCount++

        } else if (aString[index] === "o") {
            oCount++
        }
    }

    isEqual = (xCount === oCount) ? true : false

    return isEqual


}