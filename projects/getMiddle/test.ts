import { getMiddle } from "."

describe("getMiddle: return the middle character of the word", () => {
  it("If the word's length is odd, return the middle character.", () => {
    // Arrange
    const valA = "testing"


    // Act
    const received = getMiddle(valA)

    // Assert
    const expected = "t"
    expect(received).toEqual(expected)
  })

  it("If the word's length is even, return the middle character two characters.", () => {
    // Arrange
    const valA = "test"


    // Act
    const received = getMiddle(valA)

    // Assert
    const expected = "es"
    expect(received).toEqual(expected)
  })

})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
