/* import bitcodec from "..";
import { buffer2hex, hex2buffer } from "./helper";
import { BlockHeader } from "./models/BlockHeader";

const blockHeader = bitcodec.Object([
  ["version", bitcodec.Number.Int32LE],
  ["previousBlockHeaderHash", bitcodec.Buffer(32)],
  ["merkleRootHash", bitcodec.Buffer(32)],
  ["time", bitcodec.Number.UInt32LE],
  ["nBits", bitcodec.Number.UInt32LE],
  ["nonce", bitcodec.Number.UInt32LE],
]);

const blockHeaderObject = bitcodec.Object([
  { name: "headers", type: blockHeader },
  { name: "count", type: bitcodec.Number.UInt32LE },
]);

const _BlockHeaderCodec = bitcodec.VarArray(bitcodec.VarUIntBitcoin, blockHeaderObject);

export const BlockHeaderCodec = {
  decode: (hex: string): BlockHeader => {
    return buffer2hex(_BlockHeaderCodec.decode(hex2buffer(hex)));
  },

  encode: (obj: BlockHeader): string => {
    return buffer2hex(_BlockHeaderCodec.encode(hex2buffer(obj)));
  },
}; */