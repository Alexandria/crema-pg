import { SumOfNum } from "."

describe("SumOfNum: Given two numbers a and b which canbe positive or negative, find the sume of all the numbers including them too and return it. ", () => {
  it("Given two numbers a and b which canbe positive or negative, find the sume of all the numbers including them too and return it.", () => {
    // Arrange
    const valA = 1
    const valB = 0

    // Act
    const received = SumOfNum(valA, valB)

    // Assert
    const expected = 1
    expect(received).toEqual(expected)
  })

  it("including negative numbers. A and b are not ordered", () => {
    // Arrange
    const valA = 0
    const valB = -1

    // Act
    const received = SumOfNum(valA, valB)

    // Assert
    const expected = -1
    expect(received).toEqual(expected)
  })


  it("If the two numbers are equal return either a or b", () => {
    // Arrange
    const valA = 1
    const valB = 1

    // Act
    const received = SumOfNum(valA, valB)

    // Assert
    const expected = 1
    expect(received).toEqual(expected)
  })


})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
