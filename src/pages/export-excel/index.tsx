import { FC, useState, useEffect, useRef } from "react";
import { Table, Button } from "antd";
import { columns } from "./columns";
import { exportExcel } from "@mock/export-excel";
import { makeExportExcel } from "@utils/export-excel";

const ExportExcel: FC = () => {
  const [list, setList] = useState();
  const [pageParams] = useState<any>({
    pageIndex: 1,
    pageSize: 10,
    totalCount: 0,
  });
  const [chosenList, setChosenList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // 复选框全选/多选
  const tableSelectedRowKeys = useRef<any>({});
  const downloadRowSelection: {
    selectedRowKeys: React.Key[];
    onChange: (selectedRowKeys: React.Key[]) => void;
  } = {
    selectedRowKeys: tableSelectedRowKeys.current[pageParams.pageNum],
    onChange: (selectedRowKeys: React.Key[], selectedRows?: any) => {
      tableSelectedRowKeys.current[pageParams.pageNum] = selectedRowKeys;
      setChosenList(selectedRows);
    },
  };
  // excel导出
  const onExportExcel = () => {
    makeExportExcel({
      columns: columns(),
      listData: chosenList?.length > 0 ? chosenList : list,
    });
  };
  const fetchList = () => {
    setLoading(true);
    const { list: listData } = exportExcel();
    setLoading(false);
    setList(listData);
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="export_excel_container">
      <Button onClick={onExportExcel}>文件导出</Button>
      <Table<any>
        className="table_container"
        rowSelection={downloadRowSelection}
        rowKey={(item: any) => item.id}
        dataSource={list}
        loading={loading}
        columns={columns()}
        pagination={{
          showQuickJumper: true,
          showSizeChanger: true,
          size: "small",
          showTotal: (totalCount, range) =>
            `第${range[0] || "--"}~${range[1] || "--"}条 / 共${totalCount}条`,
        }}
      />
    </div>
  );
};

export default ExportExcel;
