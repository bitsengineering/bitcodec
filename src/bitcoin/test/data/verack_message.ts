import { VerackMessage } from "../../models/p2p/Verack";

type VerackMessageData = {
  hex: string;
  raw: VerackMessage;
};
export const datas: VerackMessageData[] = [
  {
    hex: "f9beb4d976657261636b000000000000000000005df6e0e2",
    raw: {
      startString: 3652501241,
      commandName: "verack",
      payloadSize: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
];