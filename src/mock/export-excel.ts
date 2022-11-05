import { mock } from "mockjs";

export function exportExcel() {
  const resp = mock({
    "list|35": [
      {
        id: /\d{5,10}/,
        "title|1": [
          "透明衣物收纳箱 衣柜装衣服被子整理箱子布艺",
          "透明衣物收纳箱",
          "被子整理箱子布艺衣柜装衣服被子",
          "整理箱子布艺衣柜装衣服被子整理箱子布艺 折叠家用换季收纳盒",
          "透明衣物收纳箱 衣柜装衣服被子整理箱子布艺衣柜装衣服被子整理箱子布艺衣柜装衣",
        ],
        "date|1": [1654999234000, 1655085634000, 1654826434000],
        "price|+10": 10,
        "count|+5": 5,
        "goodsUrl|1": [
          "https://gw.alicdn.com/bao/uploaded/i1/1993812065/O1CN01jEcF4X1R7oOZIoqdx_!!0-item_pic.jpg",
          "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
          "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
          "https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg",
          "https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg",
          "https://fastly.jsdelivr.net/npm/@vant/assets/apple-5.jpeg",
        ],
      },
    ],
  });
  return resp;
}
