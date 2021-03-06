import { add } from "."

describe("add", () => {
  it("takes 1 and 2 then gives back 3", () => {
    const val1 = 1
    const val2 = 2

    const received = add(val1, val2)

    const expected = 3
    expect(received).toEqual(expected)

  })
})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
