import countString from './WordCounter';
 
describe('testing word counter', () => {
  test('empty string should result in zero', () => {
    expect(countString({text:''})).toBe(0);
  });

  test('wrong type should result in undefined', () => {
    expect(countString({text:34})).toBe(undefined);
  });

  test('only spaces string should result in zero', () => {
    expect(countString({text:'    '})).toBe(0);
  });

  test('string with words should result in count', () => {
    expect(countString({text:'a simple string is here'})).toBe(5);
  });

  test('string with words and a lot of spaces should result in count', () => {
    expect(countString({text:'   this     is a    very    spaced    input'})).toBe(6);
  });
});