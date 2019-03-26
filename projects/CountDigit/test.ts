import { CountDigit } from "."

describe("CountDigit: Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) " +
  "between 0 and n.Count the numbers of digits d used in the writing of all the k ** 2." +
  "Call nb_dig(or nbDig or ...) the function taking n and d as parameters and returning this count.", () => {
    it("n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100" +
      "We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.", () => {
        // Arrange
        const valA = 10
        const valB = 1

        // Act
        const received = CountDigit(valA, valB)

        // Assert
        const expected = 4
        expect(received).toEqual(expected)
      })

    it("nb_dig(25, 1) numbers of intrest 1, 16, 81, 100, 121, 144, 169, 196, 361, 441 " +
      "so there are 11 digits `1` for the squares of numbers between 0 and 25.", () => {
        // Arrange
        const valA = 25
        const valB = 1

        // Act
        const received = CountDigit(valA, valB)

        // Assert
        const expected = 11
        expect(received).toEqual(expected)
      })

    it("nb_dig(14, 0) numbers of intrest ", () => {

      // Arrange
      const valA = 10
      const valB = 0

      // Act
      const received = CountDigit(valA, valB)

      // Assert
      const expected = 3
      expect(received).toEqual(expected)
    })


  })

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
