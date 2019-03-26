import { ExesNOhs } from "."

describe("ExesNOhs: Check to see if a string has the same amount of 'x's and 'o's. ", () => {
  it("The method must return a boolean and be case insensitive. ", () => {
    // Arrange
    const valA = "ooxx"


    // Act
    const received = ExesNOhs(valA)

    // Assert
    const expected = true
    expect(received).toEqual(expected)
  })

  it("The method must return a boolean and be case insensitive. ", () => {
    // Arrange
    const valA = "ooxXm"


    // Act
    const received = ExesNOhs(valA)

    // Assert
    const expected = true
    expect(received).toEqual(expected)
  })

  it("when no 'x' and 'o' is present should return true", () => {
    // Arrange
    const valA = "zpzpzpp"


    // Act
    const received = ExesNOhs(valA)

    // Assert
    const expected = true
    expect(received).toEqual(expected)
  })

  it("If X and Os is not equal then should return false", () => {
    // Arrange
    const valA = "xooxx"

    // Act
    const received = ExesNOhs(valA)

    // Assert
    const expected = false
    expect(received).toEqual(expected)
  })

})



// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
