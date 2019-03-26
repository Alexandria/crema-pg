import { mumble } from "."

describe("mumble", () => {
    it("A string and then turns it into mumble speech", () => {
        // Arrange
        const phrase1 = "aBcd"


        // Act
        const received = mumble(phrase1)


        // Assert
        const expected = "A-Bb-Ccc-Dddd"
        expect(received).toEqual(expected)
    })
    it("This should veryify that the function works even when using the same letter", () => {
        // Arrange
        const phrase2 = "BbbBb"


        // Act
        const received = mumble(phrase2)


        // Assert
        const expected = "B-Bb-Bbb-Bbbb-Bbbbb"
        expect(received).toEqual(expected)
    })

})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
