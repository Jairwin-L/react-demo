import { ColumnsType } from "antd/es/table";
import "./index.less";

export const columns = (): ColumnsType<any> => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      width: 300,
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "照片",
      key: "goodsUrl",
      render: (item: any) => (
        <img className="goods_url" src={item.goodsUrl} alt="" />
      ),
    },
  ];
};
