export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return bufferView;
  })(data);
}

export default class ArrayBufferConverter {
  load() {
    this.bufferView = getBuffer();
  }

  toString() {
    const string = [];
    for (let i = 0; i <= this.bufferView.length - 1; i += 1) {
      string.push(String.fromCharCode(this.bufferView[i]));
    }
    return string.join('');
  }
}
