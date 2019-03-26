
// Define
type Oddeven = (S: string) => string

// Implement
export const OddEven: Oddeven = (s) => {

    let even: string = ""
    let odd: string = ""

    // remove all spaces from the string
    s = s.replace(/\s/g, '')
    //  The Regex

    // \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s(whitespaces).

    // A great explanation for + can be found here.

    // As a side note, you could replace the content between the single quotes to anything you want, so you can replace whitespace with any other string.
    //https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascrip

    let sArray: string[] = s.split("")

    sArray.forEach((char, i) => {
        if (i % 2 == 0) {
            even += char
        } else {
            odd += char
        }

    })

    // for (let i = 0; i < s.length; i++) {
    //     if (i % 2 == 0) {
    //         even += s[i]
    //     } else {
    //         odd += s[i]
    //     }

    // }
    s = even + " " + odd
    return s
    // This will be a change!
}
