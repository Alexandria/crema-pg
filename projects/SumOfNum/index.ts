// Define
type Sumofnum = (a: number, b: number) => number

// Implement
export const SumOfNum: Sumofnum = (a, b): number => {
    let sum = 0

    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i
        }

    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i
        }

    } else if (a === b) {
        sum = a
    }




    return sum
} 
