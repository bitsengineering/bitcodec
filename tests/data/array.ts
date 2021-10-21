import bitcodec from "../../src";

export default [
  {
    hex: "000102030405060708090a0b0c0d0e0f10",
    codec: bitcodec.Array(17, bitcodec.Byte),
    encodeBytes: 17,
    decodeBytes: 17,
    encodingLength: 17,
    obj: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  {
    hex: "808182838485868788898a8b8c8d8e8f9091",
    codec: bitcodec.Array(18, bitcodec.Number.UInt8),
    encodeBytes: 18,
    decodeBytes: 18,
    encodingLength: 18,
    obj: [128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145],
  },
  {
    hex: "fffffffffefffffffdfffffffcffffff",
    codec: bitcodec.Array(4, bitcodec.Number.Int32LE),
    encodeBytes: 4,
    decodeBytes: 4,
    encodingLength: 16,
    obj: [-1, -2, -3, -4],
  },
  {
    hex: "808182838485868788898a8b8c8d8e8f90",
    codec: bitcodec.Array(17, bitcodec.Number.Int8),
    encodeBytes: 17,
    decodeBytes: 17,
    encodingLength: 17,
    obj: [-128, -127, -126, -125, -124, -123, -122, -121, -120, -119, -118, -117, -116, -115, -114, -113, -112],
  },
  {
    hex: "000102030405060708090a0b0c0d0e0f10",
    codec: bitcodec.Array(17, bitcodec.Number.Int8),
    encodeBytes: 17,
    decodeBytes: 17,
    encodingLength: 17,
    obj: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  {
    hex: "000000010002000300040005",
    codec: bitcodec.Array(6, bitcodec.Number.UInt16BE),
    encodeBytes: 6,
    decodeBytes: 6,
    encodingLength: 12,
    obj: [0, 1, 2, 3, 4, 5],
  },
  {
    hex: "000001000200030004000500",
    codec: bitcodec.Array(6, bitcodec.Number.UInt16LE),
    encodeBytes: 6,
    decodeBytes: 6,
    encodingLength: 12,
    obj: [0, 1, 2, 3, 4, 5],
  },
  {
    hex: "000000000000000100000002000000030000000400000005",
    codec: bitcodec.Array(6, bitcodec.Number.UInt32BE),
    encodeBytes: 6,
    decodeBytes: 6,
    encodingLength: 24,
    obj: [0, 1, 2, 3, 4, 5],
  },
  {
    hex: "000000000000000000000000000000010000000000000002000000000000000300000000000000040000000000000005",
    codec: bitcodec.Array(6, bitcodec.Number.Int64BE),
    encodeBytes: 6,
    decodeBytes: 6,
    encodingLength: 48,
    obj: [0, 1, 2, 3, 4, 5],
  },
  {
    hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff08044c86041b020602ffffffff0100f2052a010000004341041b0e8c2567c12536aa13357b79a073dc4444acb83c4ec7a0e2f99dd7457516c5817242da796924ca4e99947d087fedf9ce467cb9f7c6287078f801df276fdf84ac000000000100000001032e38e9c0a84c6046d687d10556dcacc41d275ec55fc00779ac88fdf357a187000000008c493046022100c352d3dd993a981beba4a63ad15c209275ca9470abfcd57da93b58e4eb5dce82022100840792bc1f456062819f15d33ee7055cf7b5ee1af1ebcc6028d9cdb1c3af7748014104f46db5e9d61a9dc27b8d64ad23e7383a4e0100000001c33ebff2a709f13d9f9a7569ab16a32786af7d7e2de09265e41c61d078294ecf010000008a4730440220032d30df5ee6f57fa46cddb5eb8d0d9fe8de6b342d27942ae90a3231e0ba333e02203deee8060fdc70230a7f5b4ad7d7bc3e628cbe219a886b84269eaeb81e26b4fe014104ae31c31bf91278d99b8377a35bbce5b27d9fff01000000010b6072b386d4a773235237f64c1126ac3b240c84b917a3909ba1c43ded5f51f4000000008c493046022100bb1ad26df930a51cce110cf44f7a48c3c561fd977500b1ae5d6b6fd13d0b3f4a022100c5b42951acedff14abba2736fd574bdb465f3e6f8da12e2c5303954aca7f78f3014104a7135bfe824c97ecc01ec7d7e336185c81",
    codec: bitcodec.Array(4, bitcodec.Buffer(135)),
    encodeBytes: 4,
    decodeBytes: 4,
    encodingLength: 540,
    obj: [
      "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff08044c86041b020602ffffffff0100f2052a010000004341041b0e8c2567c12536aa13357b79a073dc4444acb83c4ec7a0e2f99dd7457516c5817242da796924ca4e99947d087fedf9ce467cb9f7c6287078f801df276fdf84ac00000000",
      "0100000001032e38e9c0a84c6046d687d10556dcacc41d275ec55fc00779ac88fdf357a187000000008c493046022100c352d3dd993a981beba4a63ad15c209275ca9470abfcd57da93b58e4eb5dce82022100840792bc1f456062819f15d33ee7055cf7b5ee1af1ebcc6028d9cdb1c3af7748014104f46db5e9d61a9dc27b8d64ad23e7383a4e",
      "0100000001c33ebff2a709f13d9f9a7569ab16a32786af7d7e2de09265e41c61d078294ecf010000008a4730440220032d30df5ee6f57fa46cddb5eb8d0d9fe8de6b342d27942ae90a3231e0ba333e02203deee8060fdc70230a7f5b4ad7d7bc3e628cbe219a886b84269eaeb81e26b4fe014104ae31c31bf91278d99b8377a35bbce5b27d9fff",
      "01000000010b6072b386d4a773235237f64c1126ac3b240c84b917a3909ba1c43ded5f51f4000000008c493046022100bb1ad26df930a51cce110cf44f7a48c3c561fd977500b1ae5d6b6fd13d0b3f4a022100c5b42951acedff14abba2736fd574bdb465f3e6f8da12e2c5303954aca7f78f3014104a7135bfe824c97ecc01ec7d7e336185c81",
    ],
  },
];