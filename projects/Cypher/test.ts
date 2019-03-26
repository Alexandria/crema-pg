import { Cypher } from "."

describe("Cypher: Write a function that accepts str string and key number and returns an array of integers representing encoded str.", () => {
  it("accepts str string and key number and returns an array of integers representing encoded str.", () => {
    // Arrange
    const valA = "scout"
    const valB = 1939

    // Act
    const received = Cypher(valA, valB)

    // Assert
    const expected = [20, 12, 18, 30, 21]
    expect(received).toEqual(expected)
  })
  it("accepts str string and key number and returns an array of integers representing encoded str.", () => {
    // Arrange
    const valA = "masterpiece"
    const valB = 1939

    // Act
    const received = Cypher(valA, valB)

    // Assert
    const expected = [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
    expect(received).toEqual(expected)
  })


})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
