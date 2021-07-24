import ArrayBufferConverter from '../bufferConverter';


test('check parsing arreyBuffer ', () => {
  const ABF = new ArrayBufferConverter();
  ABF.load();

  expect(ABF.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
