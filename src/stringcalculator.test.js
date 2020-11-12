/* eslint-env jest */
const add = require('./stringcalculator')

describe('add()', () => {
  test('Given empty string, should returns 0', () => {
    const given = ""

    const expected = 0;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given input is 1,2, should return 3', () => {
    const given = "1,2"

    const expected = 3;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given input is 1\n2,3, should return 6', () => {
    const given = "1\n2,3"

    const expected = 6;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given input is //;\n1;2 should return 3', () => {
    const given = "//;\n1;2"

    const expected = 3;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given input is 1,4,-1 should return negatives not allowed: -1', () => {
    const given = "1,4,-1"

    const expected = "negatives not allowed: -1";

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
})
