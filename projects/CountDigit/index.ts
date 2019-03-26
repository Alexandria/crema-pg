// Define
type Countdigit = (a: number, b: number) => number

// Implement
export const CountDigit: Countdigit = (x, y) => {
    let nbDigCount: number = (y === 0) ? 1 : 0
    let chkNum: number = 0

    for (let i = 1; i <= x; i++) {
        chkNum = i ** 2

        do {
            // This will grab the last digit of a number and check if it equals to y
            if (chkNum % 10 === y) { //25 = 5 /// 2 =0.2
                nbDigCount++

            }
            //This will remove the last digit from a number
            chkNum = Math.floor(chkNum / 10)//25 // 0.2 //0 

        } while (chkNum != 0)

    }
    return nbDigCount
}
