import bitcodec from "../../src";

export const TxInput = bitcodec.Object([
  { name: "hash", type: bitcodec.Buffer(32) },
  { name: "index", type: bitcodec.Number.UInt32LE },
  { name: "script", type: bitcodec.VarBuffer(bitcodec.VarUIntBitcoin) },
  { name: "sequence", type: bitcodec.Number.UInt32LE },
]);

export const TxInputs = bitcodec.VarArray(bitcodec.VarUIntBitcoin, TxInput);

export const TxOutput = bitcodec.Object([
  { name: "value", type: bitcodec.Number.UInt64LE },
  { name: "script", type: bitcodec.VarBuffer(bitcodec.VarUIntBitcoin) },
]);

export const TxOutputs = bitcodec.VarArray(bitcodec.VarUIntBitcoin, TxOutput);

export const Tx = bitcodec.Object([
  { name: "version", type: bitcodec.Number.UInt32LE },
  { name: "ins", type: bitcodec.VarArray(bitcodec.VarUIntBitcoin, TxInput) },
  { name: "outs", type: bitcodec.VarArray(bitcodec.VarUIntBitcoin, TxOutput) },
  { name: "locktime", type: bitcodec.Number.UInt32LE },
]);

export function buffer2hex(obj) {
  if (Array.isArray(obj)) obj = obj.map(buffer2hex);

  if (Buffer.isBuffer(obj)) obj = obj.toString("hex");
  else if (typeof obj === "object") {
    for (var k in obj) {
      if (Buffer.isBuffer(obj[k])) obj[k] = obj[k].toString("hex");
      else if (Array.isArray(obj[k])) obj[k] = obj[k].map(buffer2hex);
      else if (typeof obj[k] === "object") obj[k] = buffer2hex(obj[k]);
    }
  }

  return obj;
}

export function isHex(s) {
  return s.length % 2 === 0 && /^[0-9a-f]*$/.test(s);
}

export function hex2buffer(obj) {
  if (Buffer.isBuffer(obj)) return obj;

  if (Array.isArray(obj)) obj = obj.map(hex2buffer);
  else if (typeof obj === "object") {
    for (var k in obj) {
      if (Array.isArray(obj[k])) obj[k] = obj[k].map(hex2buffer);
      else if (typeof obj[k] === "string" && isHex(obj[k])) obj[k] = Buffer.from(obj[k], "hex");
    }
  }

  if (typeof obj === "string" && isHex(obj)) obj = Buffer.from(obj, "hex");
  return obj;
}