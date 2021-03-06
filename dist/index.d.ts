import { BitcodecItem, EncodingType, IBitcodec } from "./models";
import { CAllBuffer, CArray, CBuffer, CNumber, CObject, CString, CVarArray, CVarBuffer, CVarString, CVarUIntBitcoin } from "./lib";
declare const bitcodec: {
    AllBuffer: CAllBuffer;
    Array: (length: number, anyCodec: IBitcodec<any>) => CArray;
    Buffer: (length: number) => CBuffer;
    Byte: CNumber;
    Number: {
        Int8: CNumber;
        UInt8: CNumber;
        Int16BE: CNumber;
        Int16LE: CNumber;
        UInt16BE: CNumber;
        UInt16LE: CNumber;
        Int32BE: CNumber;
        Int32LE: CNumber;
        UInt32BE: CNumber;
        UInt32LE: CNumber;
        Int64BE: CNumber;
        Int64LE: CNumber;
        UInt64BE: CNumber;
        UInt64LE: CNumber;
        FloatBE: CNumber;
        FloatLE: CNumber;
        DoubleBE: CNumber;
        DoubleLE: CNumber;
    };
    Object: (items: BitcodecItem[]) => CObject;
    String: (length: number, encodingType?: EncodingType) => CString;
    VarArray: (lengthType: IBitcodec<any>, anyCodec: IBitcodec<any>) => CVarArray;
    VarBuffer: (anyCodec: IBitcodec<any>) => CVarBuffer;
    VarString: (anyCodec: IBitcodec<any>, encodingType?: EncodingType) => CVarString;
    VarUIntBitcoin: CVarUIntBitcoin;
};
export default bitcodec;
export { IBitcodec };
export { hex2buffer, buffer2hex } from "./util";
