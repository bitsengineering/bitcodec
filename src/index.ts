import { BitcodecItem, EncodingType, IBitcodec, NumberTypes } from "./models";
import { CAllBuffer, CArray, CBuffer, CNumber, CObject, CString, CVarArray, CVarBuffer, CVarString, CVarUIntBitcoin } from "./lib";

const bitcodec = {
  AllBuffer: new CAllBuffer(),
  Array: (length: number, anyCodec: IBitcodec<any>) => new CArray(length, anyCodec),
  Buffer: (length: number) => new CBuffer(length),
  Byte: new CNumber(NumberTypes.UInt8, 1),
  Number: {
    Int8: new CNumber(NumberTypes.Int8, 1),
    UInt8: new CNumber(NumberTypes.UInt8, 1),
    Int16BE: new CNumber(NumberTypes.Int16BE, 2),
    Int16LE: new CNumber(NumberTypes.Int16LE, 2),
    UInt16BE: new CNumber(NumberTypes.UInt16BE, 2),
    UInt16LE: new CNumber(NumberTypes.UInt16LE, 2),
    Int32BE: new CNumber(NumberTypes.Int32BE, 4),
    Int32LE: new CNumber(NumberTypes.Int32LE, 4),
    UInt32BE: new CNumber(NumberTypes.UInt32BE, 4),
    UInt32LE: new CNumber(NumberTypes.UInt32LE, 4),
    Int64BE: new CNumber(NumberTypes.Int64BE, 8),
    Int64LE: new CNumber(NumberTypes.Int64LE, 8),
    UInt64BE: new CNumber(NumberTypes.UInt64BE, 8),
    UInt64LE: new CNumber(NumberTypes.UInt64LE, 8),
    FloatBE: new CNumber(NumberTypes.FloatBE, 4),
    FloatLE: new CNumber(NumberTypes.FloatLE, 4),
    DoubleBE: new CNumber(NumberTypes.DoubleBE, 8),
    DoubleLE: new CNumber(NumberTypes.DoubleLE, 8),
  },
  Object: (items: BitcodecItem[]) => new CObject(items),
  String: (length: number, encodingType: EncodingType = "utf8") => new CString(length, encodingType),
  VarArray: (lengthType: IBitcodec<any>, anyCodec: IBitcodec<any>) => new CVarArray(lengthType, anyCodec),
  VarBuffer: (anyCodec: IBitcodec<any>) => new CVarBuffer(anyCodec),
  VarString: (anyCodec: IBitcodec<any>, encodingType: EncodingType = "utf8") => new CVarString(anyCodec, encodingType),
  VarUIntBitcoin: new CVarUIntBitcoin(),
};

export default bitcodec;
export { IBitcodec };
export { hex2buffer, buffer2hex } from "./util";
