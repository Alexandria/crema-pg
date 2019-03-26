import { shortestWord } from "."

describe("shortestWord", () => {
  it("This will take a sentence and return the lenght of the smallest word", () => {
    // Arrange
    const valA = "Sammy has a large dog"


    // Act
    const received = shortestWord(valA)

    // Assert
    const expected = 1
    expect(received).toEqual(expected)
  })
})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
