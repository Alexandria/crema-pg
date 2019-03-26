import { OddEven } from "."

describe("OddEven", () => {
  it("Given a string S. You have to return another string such that even-indexed and odd-indexed characters of" +
    "S are grouped and groups are space - separated(see sample below)", () => {
      // Arrange
      const valA: string = "CodeWars"

      // Act
      const received = OddEven(valA)

      // Assert
      const expected = "CdWr oeas"
      expect(received).toEqual(expected)
    })

  it("Ignor any spaces in the word", () => {
    // Arrange
    const valA: string = "Moon Dance"

    // Act
    const received = OddEven(valA)

    // Assert
    const expected = "MoDne onac"
    expect(received).toEqual(expected)
  })
})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
