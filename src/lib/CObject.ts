import { IBitcodec } from "../models/IBitcodec";

type BitcodecItem = {
  name: string;
  type: IBitcodec<any>;
};

export class CObject implements IBitcodec<object> {
  private items: BitcodecItem[];

  encodeBytes: number;
  decodeBytes: number;
  encodingLength: (t?: object) => number;

  constructor(items: BitcodecItem[]) {
    this.items = items;
    this.encodeBytes = 0;
    this.decodeBytes = 0;

    this.encodingLength = (o?: object): number => {
      if (o === undefined) throw new TypeError("Expected Object, got " + o);
      return this.items.reduce((previousValue: number, currentValue: BitcodecItem) => {
        const value = (o as any)[currentValue.name];
        return previousValue + currentValue.type.encodingLength(value);
      }, 0);
    };
  }

  encode = (object: object, buffer?: Buffer, offset = 0): Buffer => {
    const bytes = this.encodingLength(object);
    if (buffer === undefined) buffer = Buffer.allocUnsafe(bytes);
    else if (buffer.length - offset < bytes) throw new RangeError("destination buffer is too small");

    this.items.forEach((item) => {
      const value = (object as any)[item.name];
      item.type.encode(value, buffer, offset);
      offset += item.type.encodeBytes;
    });
    this.encodeBytes = bytes;
    return buffer;
  };

  decode = (buffer: Buffer, offset: number = 0, end?: number | undefined): object => {
    let result = {};
    const start = offset;

    this.items.forEach((item) => {
      const value = item.type.decode(buffer, offset, end);
      offset += item.type.decodeBytes;
      (result as any)[item.name] = value;
    });
    this.decodeBytes = offset - start;

    return result;
  };
}