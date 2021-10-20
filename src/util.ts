export const calcAllLength = <T>(items: T[], calcLength: (item?: T, itemIndex?: number, itemOffset?: number) => number, allOffset: number = 0) => {
  let lOffset = allOffset;
  for (let i = 0; i < items.length; i++) lOffset += calcLength(items[i], i, lOffset);
  return lOffset;

  /* return items.reduce((previusValue, currentItem, currentIndex) => {
    return previusValue + iter(items[currentIndex], currentIndex, previusValue);
  }, acc); */
};

export function buffer2hex(obj: any) {
  if (Buffer.isBuffer(obj)) return obj.toString("hex");
  else if (Array.isArray(obj)) obj = obj.map(buffer2hex);
  else if (typeof obj === "object") {
    for (var k in obj) {
      obj[k] = buffer2hex(obj[k]);
    }
  }

  return obj;
}

export function isHex(s: string) {
  return s.length % 2 === 0 && /^[0-9a-f]*$/.test(s.toLowerCase());
}

export function hex2buffer(obj: any) {
  if (Buffer.isBuffer(obj)) return obj;
  else if (typeof obj === "string" && isHex(obj)) return Buffer.from(obj, "hex");
  else if (typeof obj === "object") {
    for (var k in obj) {
      obj[k] = hex2buffer(obj[k]);
    }
  } else if (Array.isArray(obj)) obj = obj.map(hex2buffer);

  return obj;
}
