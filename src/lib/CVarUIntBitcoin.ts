import { checkDefined, rangeError, typeError } from "../errors";
import { IBitcodec } from "../models/IBitcodec";

// https://en.bitcoin.it/wiki/Protocol_documentation#Variable_length_integer
export class CVarUIntBitcoin implements IBitcodec<number> {
  private codecName = "VarUIntBitcoin";
  private MAX_SAFE_INTEGER: number = 9007199254740991;

  private checkUInt53 = (n: number) => {
    if (n < 0 || n > this.MAX_SAFE_INTEGER) rangeError(this.codecName, `out of range value. min = 0, max = ${this.MAX_SAFE_INTEGER}, value = ${n}`);
    if (n % 1 !== 0) typeError(this.codecName, `value is not an integer. value = ${n}`);
  };

  encodeBytes: number;
  decodeBytes: number;
  encodingLength: (number?: number) => number;

  constructor() {
    this.encodeBytes = 0;
    this.decodeBytes = 0;
    this.encodingLength = (number?: number) => {
      checkDefined(this.codecName, number, "number");
      if (number === undefined) return 0; // never

      this.checkUInt53(number);
      return number < 0xfd ? 1 : number <= 0xffff ? 3 : number <= 0xffffffff ? 5 : 9;
    };
  }

  encode = (value: number, buffer?: Buffer, offset: number = 0): Buffer => {
    if (!buffer) buffer = Buffer.allocUnsafe(this.encodingLength(value));

    // 8 bit
    if (value < 0xfd) {
      buffer.writeUInt8(value, offset);
      this.encodeBytes = 1;

      // 16 bit
    } else if (value <= 0xffff) {
      buffer.writeUInt8(0xfd, offset);
      buffer.writeUInt16LE(value, offset + 1);
      this.encodeBytes = 3;

      // 32 bit
    } else if (value <= 0xffffffff) {
      buffer.writeUInt8(0xfe, offset);
      buffer.writeUInt32LE(value, offset + 1);
      this.encodeBytes = 5;

      // 64 bit
    } else {
      buffer.writeUInt8(0xff, offset);
      buffer.writeUInt32LE(value >>> 0, offset + 1);
      buffer.writeUInt32LE((value / 0x100000000) | 0, offset + 5);
      this.encodeBytes = 9;
    }

    return buffer;
  };

  decode = (buffer: Buffer, offset: number = 0, end?: number): number => {
    const first = buffer.readUInt8(offset);

    // 8 bit
    if (first < 0xfd) {
      this.decodeBytes = 1;
      return first;

      // 16 bit
    } else if (first === 0xfd) {
      this.decodeBytes = 3;
      return buffer.readUInt16LE(offset + 1);

      // 32 bit
    } else if (first === 0xfe) {
      this.decodeBytes = 5;
      return buffer.readUInt32LE(offset + 1);

      // 64 bit
    } else {
      this.decodeBytes = 9;
      var lo = buffer.readUInt32LE(offset + 1);
      var hi = buffer.readUInt32LE(offset + 5);
      var number = hi * 0x0100000000 + lo;
      this.checkUInt53(number);

      return number;
    }
  };
}
