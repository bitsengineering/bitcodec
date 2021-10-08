import { TxSegwit } from "../../models/TxSegwit";
import { TxStandart } from "../../models/TxStandart";

type TxStandartData = {
  txid: string;
  hash: string;
  hex: string;
  raw: TxStandart | TxSegwit;
};

export const datas: TxStandartData[] = [
  {
    txid: "ff8766ec873ff55cc0ac17dee7b379a4efa2a5c83dabdd9a30287c7761ad55d5",
    hash: "ff8766ec873ff55cc0ac17dee7b379a4efa2a5c83dabdd9a30287c7761ad55d5",
    hex: "0100000003b0c03779c38ddabc044947b164adbcffde8e0ddb3678494f4e8b83f13b37629d010000006b483045022100f3c0f555cd39198caf77f6756256801fc57bcabe4892601b9def52259698f40a0220230262841bff151eb617f7d4cdda6bf06d6fa791230c152e47f68bcdd0e6f64a01210204b3506d8903ca601c97a4abab6548e91004c535a5a45e21299a494b146859caffffffff060eeae54b70d12caddcc15f8897ebc2b6c3011c9a600aba74d49b969991cab3000000006b4830450221009dbeb64ddd4646e1118503c87feaa95c531b5178c6e543be782f6ecb05e8fbe602203945570f8dc56c145617f0283fa4032e0b7895a9cf2a81c7b65665b8ac608cb00121026602a5dc59c30f485b2c457ac8e2f617e27b10a1d2ae76f3231f9b01dff08964ffffffff7f715ba408db0289118f9b8578e54e721f1aee10d09844510793b8b20c87903e010000006b48304502210095e300886ec4df78e39d6d0cf5e5e531ded8f42f00e5730c371d8951867dad5b02203c55f9403f6c2aac444213161a93a86661e7367d4007be74ffb3981387cc1c790121023f0aadfeb71a4964c5087fec8b052c8236051dae838d4747543330c6b266ce6effffffff02d5781100000000001976a914342ab422c9e3ef285efe9882ae54269ed9713dd688ac20a10700000000001976a91488d924f51033b74a895863a5fb57fd545529df7d88ac00000000",
    raw: {
      version: 1,
      inputs: [
        {
          hash: "b0c03779c38ddabc044947b164adbcffde8e0ddb3678494f4e8b83f13b37629d",
          index: 1,
          script:
            "483045022100f3c0f555cd39198caf77f6756256801fc57bcabe4892601b9def52259698f40a0220230262841bff151eb617f7d4cdda6bf06d6fa791230c152e47f68bcdd0e6f64a01210204b3506d8903ca601c97a4abab6548e91004c535a5a45e21299a494b146859ca",
          sequence: 4294967295,
        },
        {
          hash: "060eeae54b70d12caddcc15f8897ebc2b6c3011c9a600aba74d49b969991cab3",
          index: 0,
          script:
            "4830450221009dbeb64ddd4646e1118503c87feaa95c531b5178c6e543be782f6ecb05e8fbe602203945570f8dc56c145617f0283fa4032e0b7895a9cf2a81c7b65665b8ac608cb00121026602a5dc59c30f485b2c457ac8e2f617e27b10a1d2ae76f3231f9b01dff08964",
          sequence: 4294967295,
        },
        {
          hash: "7f715ba408db0289118f9b8578e54e721f1aee10d09844510793b8b20c87903e",
          index: 1,
          script:
            "48304502210095e300886ec4df78e39d6d0cf5e5e531ded8f42f00e5730c371d8951867dad5b02203c55f9403f6c2aac444213161a93a86661e7367d4007be74ffb3981387cc1c790121023f0aadfeb71a4964c5087fec8b052c8236051dae838d4747543330c6b266ce6e",
          sequence: 4294967295,
        },
      ],
      outputs: [
        {
          value: 1145045,
          script: "76a914342ab422c9e3ef285efe9882ae54269ed9713dd688ac",
        },
        {
          value: 500000,
          script: "76a91488d924f51033b74a895863a5fb57fd545529df7d88ac",
        },
      ],
      locktime: 0,
    },
  },
  {
    txid: "ac2d566a2cf80d9bc2d664bd7a718266c4ac18f1a837eb352f19ba2af4bc8c04",
    hash: "ac2d566a2cf80d9bc2d664bd7a718266c4ac18f1a837eb352f19ba2af4bc8c04",
    hex: "0200000001ba609f704f51905c90803363eb86c973bfc1a504734bede0e11e5db15107e6b0000000006b4830450221008c673379495ad63c5dc7041e525726a92e41186406e2316a752f94d2ba8b710702202e5c668fb0d097bd0b1aa58992bcf810d43ebde8f4607ff2359931c13b47a9fd012102ce8a804a362697b64a6ab0ea9a92b18f4541e3ab6dab701460a164606287fa6fffffffff02bd6b0000000000001976a91489bd52df7050e246e96ebd4f0bf2212a0fe052f588ac9a84000000000000160014a8dcae36287bdbb57fc659bdf3ebc5430afb484900000000",
    raw: {
      version: 2,
      inputs: [
        {
          hash: "ba609f704f51905c90803363eb86c973bfc1a504734bede0e11e5db15107e6b0",
          index: 0,
          script:
            "4830450221008c673379495ad63c5dc7041e525726a92e41186406e2316a752f94d2ba8b710702202e5c668fb0d097bd0b1aa58992bcf810d43ebde8f4607ff2359931c13b47a9fd012102ce8a804a362697b64a6ab0ea9a92b18f4541e3ab6dab701460a164606287fa6f",
          sequence: 4294967295,
        },
      ],
      outputs: [
        {
          value: 27581,
          script: "76a91489bd52df7050e246e96ebd4f0bf2212a0fe052f588ac",
        },
        {
          value: 33946,
          script: "0014a8dcae36287bdbb57fc659bdf3ebc5430afb4849",
        },
      ],
      locktime: 0,
    },
  },
  {
    txid: "5bc66ed071ab17dfbf445aec8dc7fd0c6368a5d22699b4f2033dd1b35a87cacd",
    hash: "5bc66ed071ab17dfbf445aec8dc7fd0c6368a5d22699b4f2033dd1b35a87cacd",
    hex: "0200000001209b370fdf267810698031a0e3454e963c4d39d919a42bad20d5aca25eae9f75000000006a47304402204b236c77bcd068d37fcaf58b671bb83c844b522a96f7d7ac29ed55e4415e2ff9022013d16e7775bb1cdee067bee192f7f4839b8bd2bd62b0aed3612233ea1e3cd5270121022232c60975beb3d7b15b465d820dc17df948f9681238f199bc45b7897393838efdffffff02bc020000000000001976a91458f7fbc744235017ed82c48059fa26f66dd87ace88ac106e0900000000001976a91408e17ea7d9e97b1e41ad052e2be4ebf4724224aa88ac68be0a00",
    raw: {
      version: 2,
      inputs: [
        {
          hash: "209b370fdf267810698031a0e3454e963c4d39d919a42bad20d5aca25eae9f75",
          index: 0,
          script:
            "47304402204b236c77bcd068d37fcaf58b671bb83c844b522a96f7d7ac29ed55e4415e2ff9022013d16e7775bb1cdee067bee192f7f4839b8bd2bd62b0aed3612233ea1e3cd5270121022232c60975beb3d7b15b465d820dc17df948f9681238f199bc45b7897393838e",
          sequence: 4294967293,
        },
      ],
      outputs: [
        {
          value: 700,
          script: "76a91458f7fbc744235017ed82c48059fa26f66dd87ace88ac",
        },
        {
          value: 618000,
          script: "76a91408e17ea7d9e97b1e41ad052e2be4ebf4724224aa88ac",
        },
      ],
      locktime: 704104,
    },
  },
  // 100000 block coinbase
  {
    txid: "8c14f0db3df150123e6f3dbbf30f8b955a8249b62ac1d1ff16284aefa3d06d87",
    hash: "8c14f0db3df150123e6f3dbbf30f8b955a8249b62ac1d1ff16284aefa3d06d87",
    hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff08044c86041b020602ffffffff0100f2052a010000004341041b0e8c2567c12536aa13357b79a073dc4444acb83c4ec7a0e2f99dd7457516c5817242da796924ca4e99947d087fedf9ce467cb9f7c6287078f801df276fdf84ac00000000",
    raw: {
      version: 1,
      inputs: [
        {
          hash: "0000000000000000000000000000000000000000000000000000000000000000",
          index: 4294967295,
          script: "044c86041b020602",
          sequence: 4294967295,
        },
      ],
      outputs: [
        {
          value: 5000000000,
          script: "41041b0e8c2567c12536aa13357b79a073dc4444acb83c4ec7a0e2f99dd7457516c5817242da796924ca4e99947d087fedf9ce467cb9f7c6287078f801df276fdf84ac",
        },
      ],
      locktime: 0,
    },
  },
  // 100000 block tx
  {
    txid: "fff2525b8931402dd09222c50775608f75787bd2b87e56995a7bdd30f79702c4",
    hash: "fff2525b8931402dd09222c50775608f75787bd2b87e56995a7bdd30f79702c4",
    hex: "0100000001032e38e9c0a84c6046d687d10556dcacc41d275ec55fc00779ac88fdf357a187000000008c493046022100c352d3dd993a981beba4a63ad15c209275ca9470abfcd57da93b58e4eb5dce82022100840792bc1f456062819f15d33ee7055cf7b5ee1af1ebcc6028d9cdb1c3af7748014104f46db5e9d61a9dc27b8d64ad23e7383a4e6ca164593c2527c038c0857eb67ee8e825dca65046b82c9331586c82e0fd1f633f25f87c161bc6f8a630121df2b3d3ffffffff0200e32321000000001976a914c398efa9c392ba6013c5e04ee729755ef7f58b3288ac000fe208010000001976a914948c765a6914d43f2a7ac177da2c2f6b52de3d7c88ac00000000",
    raw: {
      version: 1,
      inputs: [
        {
          hash: "032e38e9c0a84c6046d687d10556dcacc41d275ec55fc00779ac88fdf357a187",
          index: 0,
          script:
            "493046022100c352d3dd993a981beba4a63ad15c209275ca9470abfcd57da93b58e4eb5dce82022100840792bc1f456062819f15d33ee7055cf7b5ee1af1ebcc6028d9cdb1c3af7748014104f46db5e9d61a9dc27b8d64ad23e7383a4e6ca164593c2527c038c0857eb67ee8e825dca65046b82c9331586c82e0fd1f633f25f87c161bc6f8a630121df2b3d3",
          sequence: 4294967295,
        },
      ],
      outputs: [
        {
          value: 556000000,
          script: "76a914c398efa9c392ba6013c5e04ee729755ef7f58b3288ac",
        },
        {
          value: 4444000000,
          script: "76a914948c765a6914d43f2a7ac177da2c2f6b52de3d7c88ac",
        },
      ],
      locktime: 0,
    },
  },
  {
    txid: "fe6c48bbfdc025670f4db0340650ba5a50f9307b091d9aaa19aa44291961c69f",
    hash: "fe6c48bbfdc025670f4db0340650ba5a50f9307b091d9aaa19aa44291961c69f",
    hex: "01000000000101d553fbabaf1b26977b6e5d403af9f4b567b3e28484321a6fb02e2824984e3e5000000000171600142b2296c588ec413cebd19c3cbc04ea830ead6e78ffffffff01be1611020000000017a91487e4e5a7ff7bf78b8a8972a49381c8a673917f3e870247304402205f39ccbab38b644acea0776d18cb63ce3e37428cbac06dc23b59c61607aef69102206b8610827e9cb853ea0ba38983662034bd3575cc1ab118fb66d6a98066fa0bed01210304c01563d46e38264283b99bb352b46e69bf132431f102d4bd9a9d8dab075e7f00000000",
    raw: {
      version: 1,
      marker: 0,
      flag: 1,
      inputs: [
        {
          hash: "d553fbabaf1b26977b6e5d403af9f4b567b3e28484321a6fb02e2824984e3e50",
          index: 0,
          script: "1600142b2296c588ec413cebd19c3cbc04ea830ead6e78",
          witness: [
            "304402205f39ccbab38b644acea0776d18cb63ce3e37428cbac06dc23b59c61607aef69102206b8610827e9cb853ea0ba38983662034bd3575cc1ab118fb66d6a98066fa0bed01",
            "0304c01563d46e38264283b99bb352b46e69bf132431f102d4bd9a9d8dab075e7f",
          ],
          sequence: 4294967295,
        },
      ],
      outputs: [
        {
          value: 34674366,
          script: "a91487e4e5a7ff7bf78b8a8972a49381c8a673917f3e87",
        },
      ],
      locktime: 0,
    },
  },
];
